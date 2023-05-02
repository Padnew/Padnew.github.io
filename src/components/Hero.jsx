import React from "react";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <div className="block bg-black p-4 m-6 rounded text-xxxl font-semibold text-center w-4/5">
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
  );
};

export default Hero;
