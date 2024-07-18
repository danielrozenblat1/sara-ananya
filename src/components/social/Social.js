import React from 'react';
import styles from './Social.module.css'; // Import CSS module
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'; // Import icons

const Social = () => {
  return (
    <>
    <div className={styles.title}>חפשו אותי ב..</div>
    <div className={styles.description}>לחצו על האייקון כדי לעבור לקישור</div>
    <div className={styles.socialContainer}> {/* Use className for container */}
      <div className={styles.socialLinks}> {/* Use className for inner links */}
        <a href="https://www.instagram.com/" className={styles.socialCircle}>
          <FaInstagram  color='black' /> {/* Use FaInstagram icon */}
        </a>
 
        <a href="https://www.tiktok.com/" className={styles.socialCircle}>
          <FaTiktok color='black'/> {/* Use FaTiktok icon */}
        </a>
      </div>
    </div>
    </>
  );
};

export default Social;
