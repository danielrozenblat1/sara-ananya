import React from 'react';
import styles from './Card.module.css';

const FloatingCard = ({ title }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
  
    </div>
  );
};

export default FloatingCard;