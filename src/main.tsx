import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Index from './pages/Index'
import NavigationBar from './components/NavigationBar';

import "../public/styles/index.css";
import Playground from "./pages/Playground";
import Contact from "./pages/Contact";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <NavigationBar />
          <Routes>
              <Route path={"/"} element={<Index/>} />
              <Route path={"/playground"} element={<Playground />} />
              <Route path={"/contact"} element={<Contact />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
