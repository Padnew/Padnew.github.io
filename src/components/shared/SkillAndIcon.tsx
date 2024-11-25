import { Flex } from "@mantine/core";
import React from "react";
import { IconWithText } from "../../data/Skills";

interface Props {
  skill: IconWithText;
}

export default function SkillAndIcon({ skill }: Props) {
  return (
    <Flex>
      {skill.text}
      <skill.icon size={24} color="red" />
    </Flex>
  );
}
