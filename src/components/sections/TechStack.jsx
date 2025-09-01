import React from "react";
import { Card, Flex, Text } from "comitium-ui";
import { languagesArray, toolsArray } from "../../data/SiteData.tsx";
import SkillAndIcon from "../shared/SkillAndIcon.tsx";

export default function TechStack() {
  return (
    <Card style={{ alignContent: "center" }}>
      <Text size={32}>Studies</Text>
      <Text>
        Through both education, personal studies and professional experience I
        have gained experience programming in a variety of languages, frameworks
        and tools. I have thouroughly covered object orientated as well as
        functional programming, styling, scripting as well as advanced source
        control and database management
      </Text>
      <Flex direction="row">
        <Card style={{ width: "50%" }}>
          <Text size={24}>Tools</Text>
          {toolsArray.map((tool) => {
            return <SkillAndIcon key={tool.text} skill={tool} />;
          })}
        </Card>
        <Card style={{ width: "50%" }}>
          <Text size={24}>Languages</Text>
          {languagesArray.map((tool) => {
            return <SkillAndIcon key={tool.text} skill={tool} />;
          })}
        </Card>
      </Flex>
    </Card>
  );
}
