import React from "react";
import { SocialsBlock } from "../SocialsBlock";
import { Hero } from "../Hero";
import { Flex } from "comitium-ui";

export default function Home() {
  return (
    <Flex direction="column" style={{ marginTop: 15 }}>
      <Hero />
      <SocialsBlock />
    </Flex>
  );
}
