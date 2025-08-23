import { Title, Stack } from "@mantine/core";
import React from "react";
import Home from "./sections/Home";
import Studies from "./sections/Studies";
import TechStack from "./sections/TechStack";
import { Tabs } from "comitium-ui";
import Experience from "./sections/experience";

export default function Content() {
  return (
    <Stack gap={5}>
      <Title order={2} fw={400} ml={5}>
        /paddy.software
      </Title>
      <Tabs
        tabs={[
          {
            label: "Home",
            content: <Home />,
          },
          {
            label: "Studies",
            content: <Studies />,
          },
          {
            label: "TechStack",
            content: <TechStack />,
          },
          {
            label: "Experience",
            content: <Experience />,
          },
        ]}
        defaultTab={0}
      />
    </Stack>
  );
}
