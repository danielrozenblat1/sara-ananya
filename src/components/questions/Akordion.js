import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScrollReveal from 'scrollreveal';
import styles from "./Akordion.module.css"
import Button from '../button/Button';
function DropdownAccordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(false);

  return (

    <div className={styles.akordion} >
      <Accordion
        expanded={expanded}
        sx={{
            boxShadow: '0px 2px 15px 0px rgba(87, 0, 140, 0.2)',
          width: "100%",
          margin: "auto",
          background:"linear-gradient(to left, #d7b49e, #a67a62)",
  
          display: "flex",
          flexDirection: "column",
          
          justifyContent: "center",
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "inherit",
            zIndex: -1,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded(!expanded)}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            "& .MuiTypography-root": {
              width: "100%",
              padding:"5px 0",
              color: 'black', // Apply black color to content
              fontFamily: 'AssistantR',
              direction: "rtl",
              fontSize:18
            },
            
            "& .MuiSvgIcon-root": { // Target the icon for black color
              color: 'black',
            },
           
          }}
        >
          <Typography itemProp="headline">{title}</Typography>
        </AccordionSummary >
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
            color: 'black', // Apply black color to content
           
            direction: "rtl",
            zIndex: 1,
            textAlign:"center",
            borderTop: '1px solid black', // Add top border
          }}
        >
          <Typography sx={{ fontFamily: 'AssistantR' , fontSize:18}} itemProp="description">{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
 
  );
}

export default function BasicAccordion() {
    React.useEffect(()=>{

        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top", // Start from the right side
            easing: "ease-out",
            reset:false,
            viewFactor: 0.2,
            interval: 300, // Delay between each element
            delay: 200, // Delay before the animation starts
            scale: 1, // Set scale to 1 or null
          });
    },[])
  return <>
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
        
      }}
    >
      {/* Center parent container */}
     
    <div className={styles.title} id="שאלות נפוצות" itemProp="mainEntity" itemScope itemType="https://schema.org/WebPage">זמן לענות על השאלות שלכן</div>
      <DropdownAccordion title="את מגיעה לכל מקום בארץ ?" content="כן , מגיעה עבור כלות ומלוות בתוספת תשלום" />
      <DropdownAccordion title="יש לי אירוע מתי אוכל לקבוע איתך ?" content="במידה ואת כלה אני ממליצה לקבוע כמה שיותר מוקדם(ברגע שיש תאריך כדי למנוע חוסר זמינות) 
במידה והאיפור הוא למלוות/ערב יהיה ניתן לקבוע 3 חודשים מראש - אין אפשרות לשריון לפני
" />
      <DropdownAccordion title="האם את מגיעה למקום ההתארגנות ?" content="כן, לכלות אני מגיעה עד למקום ההתארגנות
למלוות וערב אני מגיעה עבור 3 לקוחות מינימום 
במידה ואתן לקוחות בודדות ניתן להגיע אליי לפתח תקווה 
" />
      <DropdownAccordion title="מה אני צריכה לעשות בשביל לשריין איתך את התאריך ?" content={<>
        <div className={styles.descriprion}>
        לשלוח הודעה מסודרת עם סוג האיפור שאותו את צריכה כלה/מלוות/ערב לרשום את התאריך ואת מקום ההתארגנות
 אחזור אלייך בהקדם עם כל הפרטים.
 על מנת לשריין את התאריך יש לשלם מקדמה ולאחר מכן תקבלי אישור סופי ממני שהשריון בוצע וזהו את רשומה ביומן 

        </div>
        <Button text="לחצי כאן כדי לשלוח לי הודעה עכשיו" message="היי שרה,אני רוצה לשריין איתך תאריך"/>
        </>} />
      <DropdownAccordion title="מה ההבדל בין איפור ערב למלוות ?" content="ההבדל הוא רק בשעות - מלוות בדרך כלל מתארגנות משעות הבוקר המוקדמות כדי להיות  מוכנות עם הכלה לצילומים.
איפור ערב הוא לאירוע בערב ולרוב קובעים אותו משעות אחרי הצהרים/ערב" />
      <DropdownAccordion title="האם את עושה תסרוקות ?" content="אני לא עוסקת בשיער, אוכל להמליץ לכן על מסרקות מוכשרות שאני מכירה אישית וממליצה עליהן בחום!" />
      <DropdownAccordion title="כמה זמן לוקח לך לאפר ?" content="כלה בין שעה לשעה וחצי 
מלוות וערב שעה" />
    </div>

    <Button text="שרה יש לי עוד כמה שאלות אלייך"/>
 </>
}
