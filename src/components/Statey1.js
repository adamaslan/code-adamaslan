//Statey1.js
import React, { useState } from "react";

const Statey1 = () => {
  const [art, setArt] = useState(1);
  const [siblingsNum, setSiblingsNum] = useState(1);

  const handleArt = () => setArt(art + 1);
  const handleSiblingsNum = () => setSiblingsNum(siblingsNum + 1);

  return (
    <div>
      <p>I think this website is art: {art} </p>
      <p>I think this site is chill {siblingsNum} </p>

      <div>
        <button onClick={handleArt}>Art + 1</button>
        <button onClick={handleSiblingsNum}>Cool + 1</button>
      </div>
    </div>
  );
};

export default Statey1;
