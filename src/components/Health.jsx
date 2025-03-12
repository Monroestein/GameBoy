
//    🌼がんばれ🌼

import React from "react"

const health = ({ name, level }) => {
  return (
    <div className="pokemon-health">
        <h1>{name}</h1>
        <h2>Lv. {level}</h2>
        <span className="hit-points">HP ¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦</span>
    </div>
  )
};

export default health;
