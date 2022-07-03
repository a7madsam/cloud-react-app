import React from "react";
import About from "./components/About";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Support from "./components/Support";
const App = () => {
  return (
    <>
      <Navbar />
      <Landing/>
      <About/>
      <Support/>
    </>
  );
};
export default App;
