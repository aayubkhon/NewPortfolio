import React from "react";
import Navbar from "../components/navbar";
import Home from "../components/home"
import About from "../components/about"
import Services from "../components/service"
import Work from "../components/work"
import Contact from "../components/contact"
import Footer from "../components/footer"
export const Root = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About />
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Root;
