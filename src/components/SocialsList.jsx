import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Anchor, Group, useMantineTheme } from "@mantine/core";
import Socials from "../data/SocialsData";
export default function SocialsList() {
  const theme = useMantineTheme();
  return (
    <Group p={10} gap={0}>
      {Socials.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.1, borderColor: theme.colors.blue[5] }}
          whileTap={{ scale: 0.9 }}
          style={{
            overflow: "hidden",
            display: "inline-block",
            padding: "10px",
          }}
        >
          <Anchor
            bg="black"
            url={item.url}
            m={5}
            py={25}
            px={10}
            w="fit-content"
            rel="_blank"
          >
            <SocialIcon url={item.iconLink} />
          </Anchor>
        </motion.div>
      ))}
    </Group>
  );
}
