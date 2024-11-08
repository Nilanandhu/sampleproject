import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import Images from '../components/Images/Images';
import Models from '../components/Models/Models';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Service from './Service';
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/Home" element ={<Home/>} />
          <Route path="/About" element ={<About/>} />
          <Route path="/Models" element ={<Models/>} />
          <Route path="/images" element ={<Images/>} />
          <Route path="/Contact" element ={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
