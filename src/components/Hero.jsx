import { Card, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import Typewriter from "typewriter-effect";
export const Hero = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Card
        bg="black"
        pos="relative"
        display="block"
        radius="md"
        c={theme.colors.blue[4]}
        p={4}
        px={10}
        fw={400}
        fz={35}
        ta="center"
        style={{
          border: "3px solid #9ecaed",
          outline: "none",
          borderColor: "#9ecaed",
          boxShadow: "0 0 10px #9ecaed",
        }}
      >
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
        <Text fz="xl">
          A full stack software engineer from Glasgow, Scotland.
        </Text>
      </Card>
    </>
  );
};
