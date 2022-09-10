import { React, useEffect, useState } from "react";

export default function App() {
  /*DOCS: on the first render the background color is not set, but color is fetched from the api, and waits for the button to be clicked, calling handleClick that runs setBgColor changing settin the background color to the color stored upon render. */

  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => res.json())
      .then(data => setColor(data.colors[0].hex));
  }, []);


  function handleClick() {
    setBgColor(color);
  }

  return (
    <div style={{ backgroundColor: `#${bgColor}` }} >
      <button onClick={handleClick}>Change background color</button>
    </div>
  );

}
