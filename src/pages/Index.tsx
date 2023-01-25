import { useState } from 'react'

// Importing pages
import _Home from "./_Home";
import _AboutMe from "./_AboutMe";
import _Projects from "./_Projects";
import _Playground from "./_Playground";
import _Contact from "./_Contact";

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
