import React, { useState } from "react";
import reactLogo from "../src/assets/react.svg";

const Card = () => {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ background: color }}>
      <div className="flex gap-3 justify-center items-center">
        <button
          className="flex items-center gap-1 bg-green-950 text-white px-3 py-2 rounded-md"
          onClick={() => setColor("green")}
        >
          green <Rotating />
        </button>
        <button
          className="bg-blue-600 flex items-center gap-1 text-white px-3 py-2 rounded-md"
          onClick={() => setColor("blue")}
        >
          blue
          <Rotating />
        </button>
        <button
          className=" bg-red-600 flex items-center gap-1   text-white px-3 py-2 rounded-md"
          onClick={() => setColor("red")}
        >
          Red
          <Rotating />
        </button>
        <button
          className="bg-yellow-400 flex items-center gap-1  text-white px-3 py-2 rounded-md"
          onClick={() => setColor("yellow")}
        >
          Yellow
          <Rotating />
        </button>
        <button
          className="bg-black flex items-center gap-1  text-white px-3 py-2 rounded-md"
          onClick={() => setColor("black")}
        >
          black
          <Rotating />
        </button>
        <button
          className="bg-gray-700 flex items-center gap-1  text-black px-3 py-2 rounded-md"
          onClick={() => setColor("gray")}
        >
          gray
          <Rotating />
        </button>
        <button
          className=" bg-rose-500 flex items-center gap-1  text-black px-3 py-2 rounded-md"
          onClick={() => setColor("pink")}
        >
          Rose
          <Rotating />
        </button>
        <button
          className="bg-orange-800 flex items-center gap-1  text-white px-3 py-2 rounded-md"
          onClick={() => setColor("orange")}
        >
          orange
          <Rotating />
        </button>
      </div>
    </div>
  );
};
const Rotating = () => {
  let [rotated, setRotated] = useState(false);

  const rotate = () => {
    setRotated(!rotated);
  };
  return (
    <>
      <button onClick={rotate}>
        <div>
          <img
            src={reactLogo}
            alt=""
            style={{ transform: rotated ? "rotate(165deg)" : "rotate(0deg)" }}
          />
        </div>
      </button>
    </>
  );
};

export default Card;
