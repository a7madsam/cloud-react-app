import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Pricing from "./components/Pricing";
import Support from "./components/Support";
const App = () => {
  return (
    <>
      <Navbar />
      <Landing/>
      <About/>
      <Support/>
      <Platform/>
      <Pricing/>
      <Footer/>
    </>
  );
};
export default App;
