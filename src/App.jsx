import './App.css'
//Components
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import TutorialBlock from './components/Tutorials/TutorialBlock.jsx'
import Channels from './components/Channels/Channels.jsx'
import Hero from './components/Hero/Hero.jsx'
// React
import { useState, useEffect } from 'react';
// Language translation library
import { IntlProvider } from 'react-intl';
import English from './locales/en.json'; 
import Spanish from './locales/es.json'; 
//light/dark mode library
import { DarkThemeToggle, Flowbite } from 'flowbite-react'; 

function App() {

  //LANGUAGE TRANSLATION CODE STARTS HERE
  const [language, setLanguage] = useState('es');

  // set the language based on the browser language
    useEffect(() => { 
      const browserLanguage = navigator.language.toLowerCase();
      if (browserLanguage.startsWith('es')) {
        setLanguage('es');
      } else {
        setLanguage('en');
      }
    }, []);
    const messages = language === 'es' ? Spanish : English;
    //LANGUAGE TRANSLATION CODE ENDS HERE


  //LIGHT/DARK MODE CODE ENDS HERE

  return (
    <> 
    <Flowbite>
      <IntlProvider locale={language} messages={messages}>
          <div className="App">
            <div id="body">
              <Navigation className="App-navigation" language={language} setLanguage={setLanguage}>
                <DarkThemeToggle />
              </Navigation>
              <Hero className="App-hero"/>
              <TutorialBlock className="App-tutorialBlock"/>
              <Channels className="App-channels"/>
            </div>
            <div id="footer">
              <Footer className="App-footer"/>
            </div>
          </div>
        </IntlProvider>
    </Flowbite>


    </>
  )
}

export default App
