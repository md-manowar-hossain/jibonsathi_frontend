import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import About from "../components/About"
import { useState } from "react";


export default function AboutPage() {

  const Mystyles = {
    backgroundColor: "white",
    padding: "25px",
    textAlign: "center",
    fontSize: "32px",
  };
  return (
    <>
      <NavBar />
      <h2 style={Mystyles}>আমাদের সম্পর্কে</h2>
      <About />
      <Footer />
    </>
  );
}
