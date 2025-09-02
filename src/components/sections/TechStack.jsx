import React from "react";
import { AutoGrid, Card, Text } from "comitium-ui";
import { languagesArray, toolsArray } from "../../data/SiteData.tsx";
import SkillAndIcon from "../shared/SkillAndIcon.tsx";

export default function TechStack() {
  return (
    <Card style={{ alignContent: "center" }}>
      <Text size={32}>Studies</Text>
      <Text>
        Through my higher education, personal studies as well as professional
        experience I have gained experience programming in a variety of
        languages, frameworks and tools. I have thouroughly covered object
        orientated as well as functional programming, styling, scripting as well
        as advanced source control and database management
      </Text>
      <AutoGrid>
        <Card>
          <Text size={24}>Languages</Text>
          <AutoGrid columns={4}>
            {languagesArray.map((tool) => {
              return <SkillAndIcon key={tool.text} skill={tool} />;
            })}
          </AutoGrid>
        </Card>
        <Card>
          <Text size={24}>Tools</Text>
          <AutoGrid columns={4}>
            {toolsArray.map((tool) => {
              return <SkillAndIcon key={tool.text} skill={tool} />;
            })}
          </AutoGrid>
        </Card>
      </AutoGrid>
    </Card>
  );
}
