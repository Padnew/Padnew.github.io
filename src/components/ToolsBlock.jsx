import React from "react";
import { DiPostgresql, DiBootstrap, DiDotnet, DiReact } from "react-icons/di";
import { SiTailwindcss, SiPytorch } from "react-icons/si";
function ToolsBlock() {
  return (
    <div className="grid grid-cols-3 grid-flow-row text-xxl justify-between place-items-center p-3">
      <div className="flex align-center text-center">
        PostgreSQL
        <DiPostgresql className="text-xxxxl text-red-500" />
      </div>
      <div className="flex align-center text-center">
        React
        <DiReact className="text-xxxxl text-red-500" />
      </div>
      <div className="flex align-center text-center">
        .Net
        <DiDotnet className="text-xxxxl text-red-500" />
      </div>
      <div className="flex align-center text-center">
        Tailwind
        <SiTailwindcss className="text-xxxxl text-red-500" />
      </div>
      <div className="flex align-center text-center">
        Bootstrap
        <DiBootstrap className="text-xxxxl text-red-500" />
      </div>
      <div className="flex align-center text-center">
        PyTorch
        <SiPytorch className="text-xxxl text-red-500" />
      </div>
    </div>
  );
}

export default ToolsBlock;
