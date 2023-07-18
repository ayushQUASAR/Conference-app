import React from "react";
import Home from "../src/Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contactus from "../src/Pages/Contactus";
import Committee from '../src/Pages/Committee';
import Registration from '../src/Pages/Registration';
import Papers from '../src/Pages/Papers';
import Pagenf from "../src/Pages/Pagenf";
import {Speakers} from '../src/Pages/Speakers'
import "./App.css";
import Bestpaper from "./Pages/Bestpaper";
import Associawards from "./Pages/Associawards";
import Sessionpaper from "./Pages/Sessionpaper";
import Otherprizes from "./Pages/Otherprizes";


const App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Speakers" element={<Speakers/>} />
          <Route path="/committee" element={<Committee/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/papers" element={<Papers/>} />
          <Route path="/bestpaper" element={<Bestpaper/>} />
          <Route path="/sessionpaper" element={<Sessionpaper/>} />
          <Route path="/associationawards" element={<Associawards/>} />
          <Route path="/otherprizes" element={<Otherprizes/>} />
          <Route path="*" element={<Pagenf />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
