import { useState } from 'react'
import reactLogo from './assets/react.svg'
import banner from '/media/dhir0hit.svg'

// Importing pages
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main container">
        <Home />
        <AboutMe />
        <div id={"projects"} className={"container"}>
            <h1>Projects</h1>
            <h1 className={"background_text"}>Projects</h1>
        </div>
        <div id={"playground"} className={"container"}>
            <h1>Playground</h1>
            <h1 className={"background_text"}>Playground</h1>
        </div>
        <div id={"contact"} className={"container"}>
            <h1>Contact</h1>
            <h1 className={"background_text"}>Contact</h1>
        </div>
    </div>
  )
}

export default App
