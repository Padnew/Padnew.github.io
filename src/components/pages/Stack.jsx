import React from "react";
import LanguagesBlock from "../LanguagesBlock";
import ToolsBlock from "../ToolsBlock";

export default function TechStack() {
  return (
    <>
      <div className="block bg-black p-4 m-6 rounded content-center w-4/5 text-center overflow">
        <h1 className="block text-xxxl mr-2 font-semibold text-center text-sky-400">
          My stack
        </h1>
        <p>
          I've been lucky enough to be exposed to a good variety of
          technologies, languages and frameworks. Through my career I hope to
          expand my knowledge and experience of different tech as I'm always up
          for learning something new.
        </p>
        <div className="bg-black rounded grid grid-cols-2 mt-3">
          <div className="bg-gray-900 p-2 mr-1 rounded px-2 overflow-y-scroll">
            <h1 className="text-xxl font-bold mb-2 text-sky-400">
              Frameworks and Tools
            </h1>
            <ToolsBlock />
          </div>
          <div className="bg-gray-900 p-2 rounded px-2 overflow-y-scroll">
            <h1 className="text-xxl font-bold mb-2 text-sky-400">Languages</h1>
            <LanguagesBlock />
          </div>
        </div>
      </div>
    </>
  );
}
