import React from "react";
import SocialsList from "./SocialsList";
import { useState } from "react";
import SocialsData from "../data/SocialsData";
const SocialsBlock = () => {
  const [socials] = useState(SocialsData);
  return (
    <div className="text-xxl font-semibold text-green-500 justify-between rounded text-center overflow-auto w-2/9">
      <h1 className="bg-black rounded w-100">Socials</h1>
      <SocialsList socials={socials} />
    </div>
  );
};

export default SocialsBlock;
