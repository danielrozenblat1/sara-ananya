import React, { useEffect, useRef } from 'react';
import styles from './CoffeShape.module.css';
import { Player } from '@lordicon/react';
const CoffeeShape = (props) => {
    const playerRef1=useRef(null);
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
      useEffect(()=>{
        playerRef1?.current?.playFromBeginning();
      },[])

  return (
    <div className={styles.shape}>
      <div className={styles.iconWrapper}>
      <Player icon={props.icon} ref={playerRef1} size="80%" loop={true} onComplete={handleComplete}></Player>
      </div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default CoffeeShape;