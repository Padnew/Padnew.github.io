import React from "react";
import { SocialsBlock } from "../SocialsBlock";
import { Hero } from "../Hero";
import { Stack } from "@mantine/core";

export default function Home() {
  return (
    <Stack mt={20}>
      <Hero />
      <SocialsBlock />
    </Stack>
  );
}
