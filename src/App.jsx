import './App.css'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import TutorialBlock from './components/Tutorials/TotorialBlock.jsx'

function App() {
  return (
    <>
      <div className="App px-12">
        <Navigation className="App-navigation"/>
        <TutorialBlock className="App-tutorialBlock"/>
        <Footer className="App-footer"/>
      </div>
    </>
  )
}

export default App
