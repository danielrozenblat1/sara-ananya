import Button from "../components/button/Button";
import CustomizedTimeline from "../components/how/How";
import LessonBubble from "../components/steps/Step"
import styles from "./ThirdScreen.module.css"



  
const ThirdScreen=()=>{
  const recommendationsData = [
    {
      name: 'רונית כהן',
      description: 'השיעורים של לילך פשוט מדהימים! למדתי כל כך הרבה טכניקות חדשות ועכשיו אני מרגישה הרבה יותר בטוחה באיפור שלי.',
    },
    {
      name: 'יעל לוי',
      description: 'תודה רבה לילך על הקורס המקיף והמעשיר. הגישה שלך מאוד מקצועית ונעימה, ממליצה בחום!',
    },
    {
      name: 'מיכל ברק',
      description: 'לילך היא מורה מצוינת! היא מסבירה כל צעד בבהירות ובסבלנות. עכשיו אני מסוגלת ליצור מראה מושלם לכל אירוע.',
    },
    {
      name: 'שירה אברהם',
      description: 'הקורס של לילך שינה את חיי! למדתי איך להתאים את האיפור לסגנון האישי שלי ואני מרגישה הרבה יותר בטוחה בעצמי.',
    },
    {
      name: 'נועה גולן',
      description: 'לילך היא אמנית אמיתית! הטיפים והטריקים שלמדתי ממנה שדרגו את האיפור שלי לרמה אחרת לגמרי.',
    },
    {
      name: 'אורית שמעוני',
      description: 'הקורס של לילך הוא השקעה מצוינת! למדתי איך לחסוך זמן וכסף על ידי בחירת המוצרים הנכונים ושימוש בטכניקות יעילות.',
    },
    {
      name: 'תמר דביר',
      description: 'תודה לילך על החוויה המדהימה! הקורס שלך לא רק לימד אותי על איפור, אלא גם העצים אותי כאישה.',
    },
    {
      name: 'הדס מזרחי',
      description: 'לילך, את פשוט מורה מדהימה! הקורס שלך מקיף, מעניין ומהנה. ממליצה לכל מי שרוצה ללמוד איפור ברמה גבוהה.',
    },
  ];
 return <>
 {/* <div className={styles.title}>סגנונות האיפור</div>
 <div className={styles.description}>לכל אחת יש את סגנון האיפור שהכי מתאים לה ויישב על הפנים שלה בצורה הכי קלילה וטבעית,איך נדע איזה סוג איפור מתאים לך?בשביל זה קודם בואי נבין מהם סוגי האיפור הקיימים</div>
 <div className={styles.center}>
 {recommendationsData.map((recommendation, index) => (
        <LessonBubble
          key={index}
          lessonNumber={index + 1}
          title={recommendation.name}
          description={recommendation.description}
        />
      ))}
    </div> */}
    <Button text="אני רוצה לתאם איתך איפור"/>
    <div className={styles.title} id="תהליך העבודה איתי">מתחתנת בקרוב?</div>
    <div className={styles.subtitle}>אני פה כדי לענות על הכל ולהדריך אותך לאורך כל התהליך</div>
    <CustomizedTimeline/>
 </>


}
export default ThirdScreen