"use client"
import { useEffect, useState, useRef } from 'react';
import styles from './CursorAnimation.module.css';

const CursorAnimation = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // Only enable cursor animation on desktop
    if (window.innerWidth <= 768) {
      return;
    }

    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let dotX = 0;
    let dotY = 0;

    const updateCursor = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Smooth cursor ring animation
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      // Dot follows immediately
      dotX = targetX;
      dotY = targetY;

      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.left = `${currentX}px`;
        cursorRef.current.style.top = `${currentY}px`;
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-hover]')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    animate();

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`${styles.cursor} ${isHovering ? styles.cursorHover : ''}`}
      />
      <div
        ref={dotRef}
        className={styles.cursorDot}
      />
    </>
  );
};

export default CursorAnimation;

