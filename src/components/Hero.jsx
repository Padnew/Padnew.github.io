import React from "react";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <>
      <div className="relative text-sky-400">
        <div className="inset-0 bg-sky-300 rounded-l opacity-50 blur absolute"></div>
        <div className="relative block bg-black rounded-xl p-4 m-3 text-xxxl font-semibold text-center">
          <Typewriter
            onInit={(typeWriter) => {
              typeWriter
                .typeString("Hey, my names Paddy")
                .pauseFor(1000)
                .deleteAll()
                .pauseFor(500)
                .typeString("Hey, my names Paddy")
                .start();
            }}
          />
          <p className="text-xl font-semibold text-center text-sky-600">
            A 21 year old computer science student from Glasgow, Scotland.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
