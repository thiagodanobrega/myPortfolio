import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";

function About() {
  return ( 
    <div>
      <TitleBar />
      <Header />
      <main className="main-container">
        <h1>About</h1>
      </main>
      <Footer />
    </div>
  );
}

export default About;