import React from "react";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="inset-0 bg-green-500 rounded-l opacity-50 blur absolute"></div>
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
          <p className="text-xl font-semibold text-center">
            A 21 year old software engineering student from Glasgow, Scotland.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
