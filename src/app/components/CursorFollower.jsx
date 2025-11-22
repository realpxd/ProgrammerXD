"use client"
import { useEffect, useState, useRef } from 'react';
import styles from './CursorFollower.module.css';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const updateCursor = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Smooth interpolation for cursor ring
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX}px`;
        cursorRef.current.style.top = `${currentY}px`;
      }

      // Immediate update for cursor dot
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${targetX}px`;
        cursorDotRef.current.style.top = `${targetY}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    const checkHover = (target) => {
      if (!target) return false;
      return (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.hasAttribute('data-hover') ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-hover]')
      );
    };

    const handleMouseMove = (e) => {
      const isHover = checkHover(e.target);
      setIsHovering(isHover);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousemove', handleMouseMove);

    animate();

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
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
        ref={cursorDotRef}
        className={styles.cursorDot}
      />
    </>
  );
};

export default CursorFollower;

