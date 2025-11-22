"use client"
import { useEffect, useRef, useState } from 'react';
import styles from './FlappyBirdGame.module.css';

const FlappyBirdGame = ({ isOpen, onClose }) => {
  const canvasRef = useRef(null);
  const gameStateRef = useRef({
    bird: { x: 50, y: 300, width: 30, height: 30, velocity: 0, gravity: 0.5, jump: -8 },
    pipes: [],
    pipeWidth: 60,
    pipeGap: 200,
    pipeSpeed: 2,
    frameCount: 0,
    gameStarted: false,
    gameOver: false
  });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 600;

    const state = gameStateRef.current;

    const resetGame = () => {
      state.bird.y = canvas.height / 2;
      state.bird.velocity = 0;
      state.pipes = [];
      state.frameCount = 0;
      state.gameStarted = false;
      state.gameOver = false;
      setScore(0);
      setGameOver(false);
      setGameStarted(false);
    };

    const drawBird = () => {
      ctx.fillStyle = '#ff0000';
      ctx.fillRect(state.bird.x, state.bird.y, state.bird.width, state.bird.height);
    };

    const drawPipes = () => {
      ctx.fillStyle = '#00ff00';
      state.pipes.forEach(pipe => {
        ctx.fillRect(pipe.x, 0, state.pipeWidth, pipe.top);
        ctx.fillRect(pipe.x, pipe.top + state.pipeGap, state.pipeWidth, canvas.height - (pipe.top + state.pipeGap));
      });
    };

    const updateBird = () => {
      state.bird.velocity += state.bird.gravity;
      state.bird.y += state.bird.velocity;
    };

    const updatePipes = () => {
      if (state.frameCount % 100 === 0) {
        state.pipes.push({
          x: canvas.width,
          top: Math.random() * (canvas.height - state.pipeGap - 100) + 50
        });
      }

      state.pipes.forEach((pipe, index) => {
        pipe.x -= state.pipeSpeed;

        if (pipe.x + state.pipeWidth < 0) {
          state.pipes.splice(index, 1);
          setScore(prev => prev + 1);
        }

        if (
          state.bird.x < pipe.x + state.pipeWidth &&
          state.bird.x + state.bird.width > pipe.x &&
          (state.bird.y < pipe.top || state.bird.y + state.bird.height > pipe.top + state.pipeGap)
        ) {
          state.gameOver = true;
          setGameOver(true);
        }
      });
    };

    const checkCollisions = () => {
      if (state.bird.y + state.bird.height > canvas.height || state.bird.y < 0) {
        state.gameOver = true;
        setGameOver(true);
      }
    };

    const gameLoop = () => {
      if (state.gameOver || !state.gameStarted) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#000';
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        if (state.gameOver) {
          ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2 - 20);
          ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 20);
          ctx.fillText('Click to Restart', canvas.width / 2, canvas.height / 2 + 60);
        }
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      updateBird();
      updatePipes();
      checkCollisions();

      drawPipes();
      drawBird();

      state.frameCount++;
      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    const handleClick = () => {
      if (!state.gameStarted) {
        state.gameStarted = true;
        setGameStarted(true);
        gameLoop();
      } else if (!state.gameOver) {
        state.bird.velocity = state.bird.jump;
      } else {
        resetGame();
      }
    };

    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleClick();
      }
    };

    canvas.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleKeyPress);

    if (!state.gameStarted) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000';
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Click to Start', canvas.width / 2, canvas.height / 2);
    }

    return () => {
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKeyPress);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isOpen, score]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('game-modal-open');
    } else {
      document.body.classList.remove('game-modal-open');
    }
    return () => {
      document.body.classList.remove('game-modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.gameTitle}>Flappy Bird</h2>
        <div className={styles.scoreDisplay}>Score: {score}</div>
        <canvas ref={canvasRef} className={styles.gameCanvas}></canvas>
        <p className={styles.gameInstructions}>
          Click or press Space to make the bird fly. Avoid the pipes!
        </p>
      </div>
    </div>
  );
};

export default FlappyBirdGame;

