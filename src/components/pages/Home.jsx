import React from "react";
import SocialsList from "../SocialsList";
import SocialsData from "../../data/SocialsData";
import { useState } from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [socials] = useState(SocialsData);

  return (
    <>
      <div className="block bg-black text-green-500 p-4 m-6 rounded text-xxxl font-semibold text-center w-3/5">
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
          I am a 21 year old software engineering student from Scotland. <br />
        </p>
      </div>
      <div className="text-xxl font-semibold text-green-500 justify-between rounded text-center overflow-auto w-3/5">
        <h1 className="bg-black rounded w-100">Socials</h1>
          <SocialsList socials={socials} />
      </div>
    </>
  );
}
