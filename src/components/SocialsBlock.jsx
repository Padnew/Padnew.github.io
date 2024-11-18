import React from "react";
import SocialsList from "./SocialsList";
import { Card, Stack, Title } from "@mantine/core";
export const SocialsBlock = () => {
  return (
    <Card bg="inherit">
      <Stack align="center" justify="center">
        <Card bg="black" h="fit-content" py={5}>
          <Title c="cyan">Socials</Title>
        </Card>
        <SocialsList />
      </Stack>
    </Card>
  );
};
