import CustomizedTimeline from "../components/how/How";
import LessonBubble from "../components/steps/Step"
import styles from "./ThirdScreen.module.css"



  
const ThirdScreen=()=>{
    const stylesData = [
        {
          lessonNumber: 1,
          title: 'מייקאפ טבעי',
          description: 'המראה הטבעי מתמקד בהדגשה קלה של התווים הטבעיים של הפנים ללא שימוש מוגזם במוצרי איפור. המטרה היא להשיג מראה רענן ובריא.',
        },
        {
          lessonNumber: 2,
          title: 'מייקאפ זוהר',
          description: 'המראה הזוהר מדגיש את הזוהר הטבעי של העור, עם מראה קורן ונוצץ. שימוש בפריימר זוהר, מייקאפ עם גימור מבריק והיילייטר על עצמות הלחיים.',
        },
        {
          lessonNumber: 3,
          title: 'מייקאפ מלאכותי',
          description: 'המראה המלאכותי מתאים לאירועים מיוחדים כמו חתונות או אירועים חגיגיים. שימוש בפריימר לכיסוי מושלם, מייקאפ כבד עם כיסוי מלא, קונטור והיילייטר להדגשת מבנה הפנים.',
        },
        {
          lessonNumber: 4,
          title: 'מייקאפ מאט',
          description: 'המראה המאט מתאים לעור שומני או לעור עם נטייה לפצעונים. שימוש בפריימר מאט, מייקאפ מאט עם כיסוי מלא ופודרה מאט לקיבוע.',
        },
      ];
 return <>
 <div className={styles.title}>סגנונות האיפור</div>
 <div className={styles.description}>לכל אחת יש את סגנון האיפור שהכי מתאים לה ויישב על הפנים שלה בצורה הכי קלילה וטבעית,איך נדע איזה סוג איפור מתאים לך?בשביל זה קודם בואי נבין מהם סוגי האיפור הקיימים</div>
 <div className={styles.center}>
      {stylesData.map((style, index) => (
        <LessonBubble 
          key={index} 
          lessonNumber={style.lessonNumber} 
          title={style.title} 
          description={style.description} 
        />
      ))}
    </div>
    <div className={styles.title} id="תהליך העבודה איתי">ואיך נבחר את סוג האיפור האידיאלי בשבילך?</div>
    <div className={styles.subtitle}>זה עובד ככה :</div>
    <CustomizedTimeline/>
 </>


}
export default ThirdScreen