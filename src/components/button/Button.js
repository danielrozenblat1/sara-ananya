import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {

  const handleButtonClick = () => {
    const phoneNumber = "+972546952402";
    // Set the message content
    const message ="היי שרה ,אני רוצה לשמוע ממך עוד על..";

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    // Construct the WhatsApp message URL with phone number and message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    // Open the URL in a new tab
    window.open(whatsappURL, "_blank");

  };
  return (
  <div className={styles.wrapper} onClick={handleButtonClick}> <button className={styles.button}>
    {props.text}
    </button></div> 
  );
};

export default Button;