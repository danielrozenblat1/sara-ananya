import Button from "../components/button/Button"
import FloatingCard from "../components/card/Card"
import styles from "./ForthScreen.module.css"

const ForthScreen = () => {
    return <>
        <div className={styles.title}>השתלמויות וסדנאות</div>
        
        <div className={styles.description}>
            מתאים לבנות אשר מעוניינות להתמקצע בתחום בין אם זה לשימוש אישי או לשימוש מקצועי
            ההשתלמויות והסדנאות מותאמים באופן אישי לכל אחת ולפי רמת הניסיון שלה 
        </div>
            
     
        <div className={styles.row}>
             <FloatingCard title="עיצוב גבות מאפס"  />
             <FloatingCard title="הנחת צלליות שתחמיא לצורת העיניים"  />
             <FloatingCard title="התאמה נכונה של המייקאפ לפי גוון העור"/>
             <FloatingCard title="נטרול כהויות ופיגמנטציה"/>
        </div>
        <div className={styles.description}>
        ההשתלמויות והקורסים הם ביחס אישי כדי להעניק לכל אחת יחס אישי ומדוייק
        </div>

        <div className={styles.description}>
    <strong>ההשתלמויות למאפרות</strong> עבור מאפרות שמגיעות עם ידע בסיסי/למאפרות שרוצות לשפר את הטכניקות שלהן
        </div>
        <div className={styles.description}>
    <strong>סדנאות איפור זוגיות</strong> עבור בנות שמגיעות ללא ידע שרוצות לדעת איך לדעת להתאפר לאירוע וליום יום
        </div>
        <Button text="אני רוצה להירשם להשתלמות/סדנא אצלך" message="היי שרה, אשמח לשמוע עוד על השתלמות/סדנא אצלך"/>
    </>
}

export default ForthScreen