import './App.css'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import TutorialBlock from './components/Tutorials/TutorialBlock.jsx'

function App() {
  return (
    <>
      <div className="App">
        <div id="body" className='px-40 pb-10'>
          <Navigation className="App-navigation"/>
          <TutorialBlock className="App-tutorialBlock"/>
        </div>
        <div id="footer">
          <Footer className="App-footer"/>
        </div>
      </div>
    </>
  )
}

export default App
