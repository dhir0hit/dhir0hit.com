import { useState } from 'react'

// Importing pages
import _Home from "./_Home.jsx";
import _AboutMe from "./_AboutMe.jsx";
import _Projects from "./_Projects.jsx";
import _Playground from "./_Playground.jsx";
import _Contact from "./_Contact.jsx";

function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className="main container">
        <_Home />
        <_AboutMe />
        <_Projects />
        <_Playground />
        <_Contact />

        <div className={"showScroll"}>
            <div>
                <button onClick={() => {window.scrollBy(0, 400)}}>scroll down...</button>
            </div>
            <div>
                <button>scroll down...</button>
            </div>
        </div>
    </div>
  )
}

export default Index
