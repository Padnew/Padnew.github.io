import React from "react";
import Home from "./sections/Home";
import Studies from "./sections/Studies";
import TechStack from "./sections/TechStack";
import { Tabs, Flex, Header } from "comitium-ui";
import Experience from "./sections/Experience";

export default function Content() {
  return (
    <Flex direction="column" spacing={5}>
      <Header size="lg" heading="/paddy.software" />
      <Tabs
        tabs={[
          {
            label: "Home",
            content: <Home />,
          },
          {
            label: "Experience",
            content: <Experience />,
          },
          {
            label: "TechStack",
            content: <TechStack />,
          },
          {
            label: "Education",
            content: <Studies />,
          },
        ]}
        defaultTab={0}
      />
    </Flex>
  );
}
