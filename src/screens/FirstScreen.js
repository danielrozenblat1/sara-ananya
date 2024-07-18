import Circle from "../components/circle/Circle"
import styles from "./FirstScreen.module.css"
import sara from "../images/שרה תדמית.png"
import makeup from "../Icons/wired-lineal-1599-powder-makeup-face.json"
import wedding from "../Icons/wired-lineal-653-marriage.json"
import { FaCheck } from 'react-icons/fa';
import Button from "../components/button/Button"

const FirstScreen = (props) => {
    return <>
        <div className={props.scrolled ? styles.descriptionP : styles.description}>כל החששות שלך לגבי איפור הולכים להשתנות בדקות הקרובות!</div>

        <h1 className={styles.title}>שרה אנניה - אמנית איפור</h1>
        <div className={styles.center}><img className={styles.image} alt="שרה אנניה" src={sara} /></div>
        <div className={styles.me}>היי קוראים לי שרה אנניה אני מתמחה באיפור לכהות עור, הכל התחיל לפני יותר מעשור מאהבה שלי לצלליות צבעוניות וריסים ארוכים, תחביב שהפך מאוד מהר למקצוע שאני אוהבת עד היום
            בחרתי לעסוק באיפור מתוך רצון לתת מענה לכהות העור בדגש על מוצרים לעור כהה עם פיגמנטציה אחרי שנים של ניסיון ובדיקה קפדנית של המוצרים.</div>
        <div className={styles.row}>
            <Circle icon={makeup} text="איפור מלוות וערב" />
            <Circle icon={wedding} text="איפור כלות" />
            <Circle icon={makeup} text="השתלמויות למאפרות  - סדנאות איפור זוגיות" />
        </div>
        <div className={styles.promiseContainer}>
            <h2 className={styles.promiseTitle}>כשתתאפרי אצלי:</h2>
            <ul className={styles.promiseList}>
                <li> תרגישי בנוח עם האיפור</li>
                <li> גוון המייקאפ יהיה מדוייק</li>
                <li> האיפור יהיה עדין לא עמוס והכי חשוב עמיד</li>
                <li> תצאי מרוצה מהתוצאה שתתאים לבקשות שלך</li>
            </ul>
        </div>
        <Button text="אשמח לשמוע פרטים"/>
    </>
}

export default FirstScreen