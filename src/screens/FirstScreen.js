import Circle from "../components/circle/Circle"
import styles from "./FirstScreen.module.css"
import sara from "../images/שרה אנניה.png"
import makeup from "../Icons/wired-lineal-1599-powder-makeup-face.json"
import wedding from "../Icons/wired-lineal-653-marriage.json"
const FirstScreen=(props)=>{
   

return <>
<div className={props.scrolled? styles.descriptionP:styles.description}>כל החששות שלך לגבי איפור הולכים להשתנות בדקות הקרובות!</div>

<h1 className={styles.title}>שרה אנניה - אמנית איפור</h1>
<div className={styles.center}><img className={styles.image} alt="שרה אנניה" src={sara}/></div>
<div className={styles.row}>
<Circle icon={makeup} text="איפור ערב"/>
<Circle icon={wedding} text="איפור כלות"/>
</div>
</>


}
export default FirstScreen