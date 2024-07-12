import CoffeeShape from "../components/bubble/CoffeShape"
import styles from "./SecondScreen.module.css"
import heavy from "../Icons/wired-outline-1589-makeup-mirror.json"
import brush from "../Icons/wired-outline-1587-cosmetic-brush.json"
import listen from "../Icons/wired-outline-1046-podcasts.json"
import Button from "../components/button/Button"
const SecondScreen=()=>{


    return <>
<div className={styles.title}>כמה פעמים הרגשת..?</div>
<div className={styles.row}>
<CoffeeShape icon={heavy} title="שזו לא את אחרי האיפור" description="הסתכלת במראה אחרי האיפור שעשו לך ופשוט אמרת לעצמך - אני לא נראית ככה!"/>
<CoffeeShape icon={brush} title="שהאיפור כבד על הפנים שלך" description="הסתובבת עם האיפור עלייך בתחושת כבדות על הפנים"/>
<CoffeeShape icon={listen} title="שאין הקשבה לדגשים שלך" description="ביקשת מהמאפרת משהו אחד וקיבלת משהו שונה לגמרי"/>
</div>
<div className={styles.description}>כלכך הרבה נשים נכוות מתחום האיפור ונאלצות להגיע לאירוע (לפעמים החשוב בחיים שלהן) <div className={styles.bold}>ו"להתפשר"</div> על תוצאה לא מושלמת!</div>
  <Button text="שרה, בואי נדבר"/>
  
    </>
}
export default SecondScreen