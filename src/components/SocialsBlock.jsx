import React from "react";
import SocialsList from "./SocialsList";
import { Card, Stack, Title, useMantineTheme } from "@mantine/core";
export const SocialsBlock = () => {
  const theme = useMantineTheme();
  return (
    <Card bg="inherit" align="center">
      <Stack align="center" justify="center" gap={3}>
        <Card bg="black" h="fit-content" py={5}>
          <Title c={theme.colors.blue[4]} fw={400}>
            Socials
          </Title>
        </Card>
        <SocialsList />
      </Stack>
    </Card>
  );
};
