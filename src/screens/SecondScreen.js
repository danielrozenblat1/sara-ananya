import CoffeeShape from "../components/bubble/CoffeShape"
import styles from "./SecondScreen.module.css"
import heavy from "../Icons/wired-outline-1589-makeup-mirror.json"
import brush from "../Icons/wired-outline-1587-cosmetic-brush.json"
import listen from "../Icons/wired-outline-1046-podcasts.json"
import unequal from "../Icons/wired-outline-2150-equal-sign (1).json"
import Button from "../components/button/Button"
const SecondScreen=()=>{


    return <>
<div className={styles.title}>כמה פעמים הרגשת..?</div>
<div className={styles.row}>
<CoffeeShape icon={heavy} title="שגוון המייקאפ לא תואם לך" description="יש הבדלים בגוונים בין הפנים לגוף ואת נראית כהה או אפורה מדי"/>
<CoffeeShape icon={brush} title="שהאיפור מרגיש ונראה כבד על הפנים" description="הסתובבת עם האיפור עלייך בתחושת כבדות על הפנים"/>
<CoffeeShape icon={listen} title="שאין הקשבה לצרכים שלך" description="ביקשת מהמאפרת משהו אחד וקיבלת משהו שונה לגמרי"/>
<CoffeeShape icon={unequal} title="שאת לא דומה לעצמך אחרי האיפור" description="הסתכלת במראה ואמרת לעצמך שאת לא נראית ככה"/>
</div>
<div className={styles.description}>כלכך הרבה נשים נכוות מתחום האיפור ונאלצות להגיע לאירוע (לפעמים החשוב בחיים שלהן) <div className={styles.bold}>ו"להתפשר"</div> על תוצאה לא מושלמת!</div>
  <Button text="שרה, בואי נדבר"/>
  
    </>
}
export default SecondScreen