import { Title, Tabs, Stack } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Stack gap={5}>
      <Title fw={400} ml={5}>
        /paddy.software/
      </Title>
      <Tabs defaultValue="home" variant="outline" color="red">
        <Tabs.List mx={0} px={0}>
          <Link to="/home">
            <Tabs.Tab value="home" fz={18}>
              home
            </Tabs.Tab>
          </Link>
          <Link to="/studies">
            <Tabs.Tab value="studies" fz={20}>
              studies
            </Tabs.Tab>
          </Link>
          <Link to="/stack">
            <Tabs.Tab value="stack" fz={20}>
              my stack
            </Tabs.Tab>
          </Link>
          <Link to="/experience">
            <Tabs.Tab value="experience" fz={20}>
              experience
            </Tabs.Tab>
          </Link>
        </Tabs.List>
      </Tabs>
    </Stack>
  );
}

export default Header;
