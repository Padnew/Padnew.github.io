import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function SocialsList({ socials }) {
  return (
    <ul style={{ overflow: "hidden" }}>
      {socials.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ overflow: "hidden" }}
          className="inline-block py-6"
        >
          <span
            url={item.url}
            className="bg-black px-4 py-6 mx-2 my-2 w-fit basis-1/3 rounded"
            style={{ overflow: "hidden" }}
          >
            <SocialIcon url={item.iconLink} />
          </span>
        </motion.div>
      ))}
    </ul>
  );
}