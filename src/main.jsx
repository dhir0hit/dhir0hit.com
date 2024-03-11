import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Index from './pages/Index.jsx'
import NavigationBar from './components/NavigationBar.jsx';

import "../public/styles/index.css";
import Playground from "./pages/Playground.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <NavigationBar />
          <Routes>
              <Route path={"/"} element={<Index/>} />
              <Route path={"/playground"} element={<Error type={404} error={"Playground is Under Construction"} />} />
              <Route path={"/contact"} element={<Contact />} />
              <Route path={"*"} element={<Error type={404} error={"no page found"} />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
