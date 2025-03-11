
//    🌼がんばれ🌼

import React from "react"
import './Screen.css'
import Banner from "./components/Banner";
import Fight from "./components/Fight";

const Screen = () => {
  return (
    <>
      <main>
        <div className="game-screen">
          <Fight/>
          <Banner/>
        </div>
      </main>
    </>
  )
};

export default Screen;

