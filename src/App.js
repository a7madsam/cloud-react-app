import React from "react";
import About from "./components/About";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Landing/>
      <About/>
    </>
  );
};
export default App;
