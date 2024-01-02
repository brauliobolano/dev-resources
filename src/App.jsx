import './App.css'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import TutorialBlock from './components/Tutorials/TutorialBlock.jsx'

import { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl'; //language translation library
import English from './locales/en.json'; // English language translation file
import Spanish from './locales/es.json'; // Spanish language translation file

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

  //LIGHT/DARK MODE CODE STARTS HERE
  const [mode, setMode] = useState('light');
  // set the mode based on the browser mode
  useEffect(() => {
    const browserMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setMode(browserMode);
  }, []);
  //LIGHT/DARK MODE CODE ENDS HERE

  return (
    <> 
      <IntlProvider locale={language} messages={messages}>
        <div className="App">
          <div id="body" className='px-40 pb-10'>
            <Navigation className="App-navigation" language={language} setLanguage={setLanguage}/>
            <TutorialBlock className="App-tutorialBlock"/>
          </div>
          <div id="footer">
            <Footer className="App-footer"/>
          </div>
        </div>
      </IntlProvider>

    </>
  )
}

export default App
