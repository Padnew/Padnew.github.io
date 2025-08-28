import React from "react";
import SocialsList from "./SocialsList";
import { Container, Flex, Text } from "comitium-ui";
export const SocialsBlock = () => {
  return (
    <Container padding="sm">
      <Flex
        direction="column"
        spacing="none"
        style={{
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text size="xl">Socials</Text>
        <SocialsList />
      </Flex>
    </Container>
  );
};
