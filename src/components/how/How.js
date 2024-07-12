import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
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
כמו בכל התחלה, קודם נכיר, נבין מה סוג האירוע,נבין איך את רוצה להראות ותקבלי ממני הוראות עד הפגישה שלנו
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
            בפגישה אנחנו נתאים בדיוק את גוון האיפור לעור שלך ונעשה סקיצה לדוגמא 
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
              3
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
               <HandshakeIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} fontFamily="Assistant" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.2rem" color="black" id="item3" textAlign="right" direction="rtl" marginBottom="0">
           תיקונים ושינויים
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item3" textAlign="right" marginBottom="0">
וכאן היופי! כאן המקום שלך לתת את דעתך ולבקש תיקונים ושינויים לאיפור שלך
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
              4
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
          אנחנו נפגשות ביום האירוע, אני מאפקת אותך בדיוק כמו שרצית ואת תהי הכי יפה ברחבה בהבטחה!ד
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
              5
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <ImageIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} fontFamily="Assistant" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.2rem" color="black" id="item3" textAlign="right" direction="rtl" marginBottom="0">
        צילומים
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item3" textAlign="right" marginBottom="0">
          כמובן שלא תצאי ממני בלי תמונה וסרטון של האיפור המושלם שלך
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <Button text="שרה, נשמע לי מדהים! בואי נדבר!" />
    </>
  );
};

export default CustomizedTimeline;