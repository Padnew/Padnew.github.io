import React from "react";
import { Card, Title, Group, useMantineTheme, Text, Grid } from "@mantine/core";
import { languagesArray, toolsArray } from "../../data/Skills.tsx";
import SkillAndIcon from "../shared/SkillAndIcon.tsx";

export default function TechStack() {
  const theme = useMantineTheme();
  return (
    <>
      <Card
        display="block"
        bg="black"
        ta="center"
        c={theme.colors.blue[4]}
        mt={15}
        h="fit-content"
        w="75%"
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
        <Group justify="space-between" grow align="start" mt={10}>
          <Card bg={theme.colors.dark[1]} c={theme.colors.blue[4]} ta="center">
            <Title order={2} mb={10} fw={400}>
              Tools
            </Title>
            <Grid span={{ base: 12, md: 6, lg: 3 }} justify="center">
              {toolsArray.map((tool) => {
                return <SkillAndIcon key={tool.text} skill={tool} />;
              })}
            </Grid>
          </Card>
          <Card
            bg={theme.colors.dark[1]}
            c={theme.colors.blue[4]}
            justify="center"
            h="fit-content"
          >
            <Title order={2} mb={10} fw={400}>
              Languages
            </Title>
            <Grid span={{ base: 12, md: 6, lg: 3 }} justify="center">
              {languagesArray.map((tool) => {
                return <SkillAndIcon key={tool.text} skill={tool} />;
              })}
            </Grid>
          </Card>
        </Group>
      </Card>
    </>
  );
}
