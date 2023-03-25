import "./App.css";
import Nav from "./common/Nav";
import Home from "./Pages/Home";
import "./common/Commoncss.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";

import React, { Route, Routes } from "react-router-dom";


function App() {

  return (
    <div>
      <Nav />
      {/* <Home/>
      <About />
   
      <Contact/> */}
      <Routes>
        <Route exact="true" path="/" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
