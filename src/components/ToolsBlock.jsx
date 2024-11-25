import { SimpleGrid } from "@mantine/core";
import React from "react";
import { toolsArray } from "../data/Skills.tsx";
import SkillAndIcon from "./shared/SkillAndIcon.tsx";
function ToolsBlock() {
  return (
    <SimpleGrid cols={3}>
      {toolsArray.map((tool) => {
        return <SkillAndIcon key={tool.text} skill={tool} />;
      })}
    </SimpleGrid>
  );
}

export default ToolsBlock;
