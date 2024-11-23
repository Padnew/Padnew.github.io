import { Title, Tabs, Stack } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Stack gap={5}>
      <Title fw={400} ml={5}>
        /paddy.software/
      </Title>
      <Tabs defaultValue="home" color="red" variant="outline">
        <Tabs.List mx={0} px={0}>
          <Link to="/home">
            <Tabs.Tab value="home">home</Tabs.Tab>
          </Link>
          <Link to="/studies">
            <Tabs.Tab value="studies">studies</Tabs.Tab>
          </Link>
          <Link to="/stack">
            <Tabs.Tab value="stack">my stack</Tabs.Tab>
          </Link>
          <Link to="/experience">
            <Tabs.Tab value="experience">experience</Tabs.Tab>
          </Link>
        </Tabs.List>
      </Tabs>
    </Stack>
  );
}

export default Header;
