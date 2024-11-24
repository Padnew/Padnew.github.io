import { Title, Tabs, Stack } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Stack gap={5}>
      <Title order={2} fw={400} ml={5}>
        /paddy.software
      </Title>
      <Tabs defaultValue="home" variant="outline" color="red">
        <Tabs.List>
          <Link to="/home">
            <Tabs.Tab value="home" fz={16}>
              /home
            </Tabs.Tab>
          </Link>
          <Link to="/studies">
            <Tabs.Tab value="studies" fz={16}>
              /studies
            </Tabs.Tab>
          </Link>
          <Link to="/stack">
            <Tabs.Tab value="stack" fz={16}>
              /techstack
            </Tabs.Tab>
          </Link>
          <Link to="/experience">
            <Tabs.Tab value="experience" fz={16}>
              /experience
            </Tabs.Tab>
          </Link>
        </Tabs.List>
      </Tabs>
    </Stack>
  );
}

export default Header;
