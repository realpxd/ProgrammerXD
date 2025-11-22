"use client"
import { useState } from 'react';
import FlappyBirdGame from './FlappyBirdGame';
import styles from './GameButton.module.css';

const GameButton = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <>
      <button 
        className={styles.gameButton}
        onClick={() => setIsGameOpen(true)}
        aria-label="Play Game"
      >
        🎮
      </button>
      <FlappyBirdGame 
        isOpen={isGameOpen} 
        onClose={() => setIsGameOpen(false)} 
      />
    </>
  );
};

export default GameButton;

