import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function SocialsList({ socials }) {
  return (
    <ul>
      {socials.map((item) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-block"
        >
          <span
            url={item.url}
            key={item.id}
            className="bg-black p-4 mx-2 my-2 w-fit basis-1/3 inline-block rounded"
          >
            <SocialIcon url={item.iconLink}/>
          </span>
        </motion.div>
      ))}
    </ul>
  );
}
