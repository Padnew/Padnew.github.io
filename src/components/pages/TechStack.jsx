import React from "react";
import LanguagesBlock from "../LanguagesBlock";
import ToolsBlock from "../ToolsBlock";
import { Card, Title, Group, useMantineTheme, Text } from "@mantine/core";

export default function TechStack() {
  const theme = useMantineTheme();
  return (
    <>
      <Card
        display="block"
        bg="black"
        ta="center"
        w="75%"
        c={theme.colors.blue[4]}
        mt={15}
      >
        <Title fz={32} fw={400} mb={10}>
          Stack
        </Title>
        <Text ta="left">
          Through both education, personal studies and professional experience I
          have gained experience programming in a variety of languages. I have
          thouroughly covered functional and standard programming, styling,
          scripting as well as source control
        </Text>
        <Group justify="space-between" grow>
          <Card
            p={10}
            bg={theme.colors.dark[1]}
            c={theme.colors.blue[4]}
            justify="center"
          >
            <ToolsBlock />
          </Card>
          <Card
            p={10}
            bg={theme.colors.dark[1]}
            c={theme.colors.blue[4]}
            justify="center"
          >
            <LanguagesBlock />
          </Card>
        </Group>
      </Card>
    </>
  );
}
