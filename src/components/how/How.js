import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import PhoneIcon from '@mui/icons-material/Phone';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import ImageIcon from '@mui/icons-material/Image';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Typography from '@mui/material/Typography';
import ScrollReveal from 'scrollreveal';
import GroupIcon from '@mui/icons-material/Group';

import styles from "./How.module.css";
import { Link } from 'react-scroll';
import Button from '../button/Button';

const CustomizedTimeline = () => {

  React.useEffect(() => {

    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 500,
      distance: "30px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item1`, {
      duration: 500,
      distance: "30px",
      origin: "right",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item2`, {
      duration: 500,
      distance: "30px",
      origin: "left",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item3`, {
      duration: 1000,
      distance: "30px",
      origin: "right",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

  }, []);

  return (
    <>
    
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" id="item1">
              1
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <PhoneIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.2rem" color="black" id="item1" textAlign="right" direction="rtl" marginBottom="0">
              שיחת ייעוץ ואפיון
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item1" textAlign="right" marginBottom="0">
            - נשוחח בטלפון נכיר קצת ואביא לך את כל הפרטים שכלולים בחבילה לאיפור כלה עלויות וכו' 
            ונשריין את התאריך ביומן
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" color="black" id="item2">
              2
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
        
            <GroupIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.2rem" color="black" id="item2" textAlign="right" direction="rtl" marginBottom="0">
         פגישה לפני האירוע
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item2" marginRight="auto" textAlign="right" marginBottom="0">
            לאחר שריון התאריך אנחנו נפגשות כחודש לפני החתונה לאיפור ניסיון ונעשה תיאום ציפיות כדי שביום החתונה לא תצטרכי לדאוג לכלום
            </Typography>
          </TimelineContent>
        </TimelineItem>
   
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" color="black" id="item2">
              3
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <GroupIcon fontSize="large" sx={{ color: 'black' }} />
        
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.2rem" color="black" id="item2" textAlign="right" direction="rtl" marginBottom="0">
           פגישה ביום האירוע
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item2" textAlign="right" marginBottom="0">
            ביום החתונה, נפגשות מתרגשות מקשקשות ואני מאפרת אותך ביום החשוב שלך בצורה הכי מדוייקת בשבילך
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" id="item3">
             4
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <NightlifeIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} fontFamily="Assistant" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.2rem" color="black" id="item3" textAlign="right" direction="rtl" marginBottom="0">
        ליווי לאולם(אופצינלי)
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item3" textAlign="right" marginBottom="0">
            במידה וסגרת איתי ליווי לאולם אנחנו נתראה גם שם לעוד כמה שעות
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <Button text="אני רוצה שתאפרי אותי לחתונה" />
    </>
  );
};

export default CustomizedTimeline;