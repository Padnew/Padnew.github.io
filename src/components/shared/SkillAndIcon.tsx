import { Flex } from "comitium-ui";
import React from "react";
import { IconWithText } from "../../data/SiteData";

interface Props {
  skill: IconWithText;
}

export default function SkillAndIcon({ skill }: Props) {
  return (
    <Flex spacing={5}>
      {skill.text}
      <skill.icon size={22} color="red" />
    </Flex>
  );
}
