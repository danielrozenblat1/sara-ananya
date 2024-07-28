import styles from "./Recommends.module.css"
import result1 from "../../images/שרה לקוחה 1.png"
import result2 from "../../images/שרה לקוחה 2.png"
import result3 from "../../images/שרה לקוחה 3.png"
import result4 from "../../images/שרה לקוחה 4.png"
import result5 from "../../images/שרה לקוחה 5.png"
import result6 from "../../images/שרה לקוחה 6.png"
import result7 from "../../images/שרה לקוחה 7.png"
import result8 from "../../images/שרה לקוחה 8.png"
import result9 from "../../images/שרה לקוחה 9.png"
import result10 from "../../images/שרה לקוחה 10.png"
import result11 from "../../images/שרה לקוחה 11.png"
import result12 from "../../images/שרה לקוחה 12.png"
import result13 from "../../images/שרה לקוחה 13.png"
import result14 from "../../images/שרה לקוחה 14.png"
import result15 from "../../images/שרה לקוחה 15.png"
import result16 from "../../images/שרה לקוחה 16.png"

import result17 from "../../images/שרה לקוחה 17.png"
import result18 from "../../images/שרה לקוחה 18.png"
import result19 from "../../images/שרה לקוחה 19.png"
import result20 from "../../images/שרה לקוחה 20.png"
import result21 from "../../images/שרה לקוחה 21.png"
import result22 from "../../images/שרה לקוחה 22.png"
import result23 from "../../images/שרה לקוחה 23.png"
import result24 from "../../images/שרה לקוחה 24.png"
import result25 from "../../images/שרה לקוחה 25.png"
import result26 from "../../images/שרה לקוחה 26.png"
import result27 from "../../images/שרה לקוחה 27.png"
import result28 from "../../images/שרה לקוחה 28.png"
import result29 from "../../images/שרה לקוחה 29.png"
import result30 from "../../images/שרה לקוחה 30.png"
import result31 from "../../images/שרה לקוחה 31.png"
import result32 from "../../images/שרה לקוחה 32.png"
import result33 from "../../images/שרה לקוחה 33.png"
import result34 from "../../images/שרה לקוחה 34.png"


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../button/Button"
const Recommends=()=>{
    const sliderSettings = {
     
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
        infinite: true,
   
        dots:false,
        
        slidesToShow: window.innerWidth < 450 ? 1 : window.innerWidth < 650 ? 2 : window.innerWidth < 1100 ? 3 :4,
        slidesToScroll:1,
                     
      };
      const content = [
        {
          type: 'image',
          src: result1,
        },
        {
          type: 'image',
          src: result33,
        },
        {
          type: 'image',
          src: result11,
        },
        {
          type: 'image',
          src: result6,
        },
       
        {
          type: 'image',
          src: result30,
        },
        {
          type: 'image',
          src: result20,
        },
        {
          type: 'image',
          src: result32,
        },
        {
          type: 'image',
          src: result31,
        },
     
        {
          type: 'image',
          src: result12,
        },
        {
          type: 'image',
          src: result34,
        },
        {
          type: 'image',
          src: result22,
        },
        {
          type: 'image',
          src: result17,
        },
        {
          type: 'image',
          src: result24,
        },
        {
          type: 'image',
          src: result26,
        },
        {
          type: 'image',
          src: result28,
        },
        ];  
return <>
<div className={styles.title} id="המלצות">בואי לראות את הבנות שכבר סמכו עליי</div>
<div className={styles.explain}>תחליקי בין התמונות</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemscope itemtype="http://schema.org/Review">
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`שרה  אנניה לקוחה ממליצה מספר ${index + 1}`} itemprop="image"/>
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
                
                  itemprop="image"
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
           <meta itemprop="datePublished" content={new Date().toISOString()} />
            </div>
            
          ))}
        </Slider>
      </div>


</>


}
export default Recommends