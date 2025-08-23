import React from "react";
import Typewriter from "typewriter-effect";
import { Text, Card } from "comitium-ui";
export const Hero = () => {
  return (
    <>
      <Card
        curved="md"
        style={{
          border: "3px solid #9ecaed",
          outline: "none",
          borderColor: "orange",
          boxShadow: "0 0 10px #9ecaed",
          position: "relative",
          display: "block",
          padding: "10px 10px 4px 4px",
          fontSize: 35,
          fontWeight: 400,
          borderRadius: "10px",
          textAlign: "center",
        }}
        footer={
          <>
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
            <Text style={{ marginBottom: "10px" }}>
              A full stack software engineer from Glasgow, Scotland.
            </Text>
          </>
        }
      />
    </>
  );
};
