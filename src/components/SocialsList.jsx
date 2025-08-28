import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { LinkTo, Flex } from "comitium-ui";
import Socials from "../data/SocialsData";
export default function SocialsList() {
  return (
    <Flex direction="row">
      {Socials.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            overflow: "hidden",
            display: "inline-block",
            padding: "10px",
          }}
        >
          <LinkTo href={item.iconLink} target="_blank">
            <SocialIcon url={item.iconLink} />
          </LinkTo>
        </motion.div>
      ))}
    </Flex>
  );
}
