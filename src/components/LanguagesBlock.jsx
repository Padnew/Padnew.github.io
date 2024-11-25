import React from "react";
import { SimpleGrid } from "@mantine/core";
import { languagesArray } from "../data/Skills.tsx";
import SkillAndIcon from "./shared/SkillAndIcon.tsx";
function LanguagesBlock() {
  return (
    <SimpleGrid cols={3}>
      {languagesArray.map((skill) => {
        return <SkillAndIcon key={skill.text} skill={skill} />;
      })}
    </SimpleGrid>
  );
}

export default LanguagesBlock;
