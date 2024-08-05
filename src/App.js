import About from "./Components/About";
import {Contact} from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import {Nav} from "./Components/Nav";
import Service from "./Components/Services";
import "./css/Main.css";
import  './css/Animation.css'
import LearnMore from "./Components/LearnMore";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PrivacyPolicy from "./Components/PrivacyPolicy";
import NoPage from "./Components/NoPage";
function App() {
  // states
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // ***Images On load***

  const Imgs = document.querySelectorAll('image')
  Imgs.forEach(img =>{
    img.onload = () =>{
      img.parentElement.classList.add('img_loading');
      console.log(img.parentElement);
    }
  })
  return (
    <div className={'container'}>
      <BrowserRouter>
        <Routes>
          <Route index element={ <Hero windowWidth={windowWidth} setWindowWidth={setWindowWidth} />} />
          <Route exact path="/LearnMore" element={ <LearnMore windowWidth={windowWidth} setWindowWidth={setWindowWidth}/>} />
          <Route path="/PrivacyPolicy" element={ <PrivacyPolicy />} />
          <Route path="*" element={ <NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;