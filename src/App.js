
import { useEffect, useState } from 'react';
import './App.css';
import ByMe from './components/ByMe/ByMe';
import NavBarNew from './components/NewNav/NavBarNew';
import BasicAccordion from './components/questions/Akordion';
import Recommends from './components/recommends/Recommends';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import Social from './components/social/Social';

function App() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return <>
  <NavBarNew/>
  <FirstScreen scrolled={scrolled}/>
  <Recommends/>
  <SecondScreen/>

  <ThirdScreen/>
  <ForthScreen/>
  <BasicAccordion/>
 
  <ByMe/>
  </>
}

export default App;
