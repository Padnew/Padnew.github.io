import { Title, Tabs, Stack } from "@mantine/core";
import React from "react";
import Home from "./pages/Home";
import Studies from "./pages/Studies";
import TechStack from "./pages/TechStack";

export default function Content() {
  return (
    <Stack gap={5}>
      <Title order={2} fw={400} ml={5}>
        /paddy.software
      </Title>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab value="home" fz={16}>
            /home
          </Tabs.Tab>
          <Tabs.Tab value="studies" fz={16}>
            /studies
          </Tabs.Tab>
          <Tabs.Tab value="stack" fz={16}>
            /techstack
          </Tabs.Tab>
          <Tabs.Tab value="experience" fz={16}>
            /experience
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Tab ta="home">
          <Home />
        </Tabs.Tab>
        <Tabs.Tab value="studies">
          <Studies />
        </Tabs.Tab>
        <Tabs.Tab value="stack">
          <TechStack />
        </Tabs.Tab>
      </Tabs>
    </Stack>
  );
}
