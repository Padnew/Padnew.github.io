import React from "react";
import {
  DiPython,
  DiCode,
  DiHaskell,
  DiJavascript,
  DiJava,
  DiPhp,
  DiHtml5,
} from "react-icons/di";
function LanguagesBlock() {
  return (
    <div className="grid grid-cols-3 grid-flow-row text-xxl justify-between place-items-center p-3">
      <div className="flex align-center text-center">
        Python
        <DiPython className="text-xxxxl text-red-500" />
      </div>
      <div className="flex align-center">
        Java
        <DiJava className="text-xxxxl align-center text-red-500" />
      </div>
      <div className="flex align-center">
        SQL
        <DiCode className="text-xxxxl align-center text-red-500" />
      </div>
      <div className="flex align-center">
        Haskell
        <DiHaskell className="text-xxxxl align-center text-red-500" />
      </div>
      <div className="flex align-center">
        C#
        <DiCode className="text-xxxxl align-center text-red-500" />
      </div>
      <div className="flex align-center">
        HTML5
        <DiHtml5 className="text-xxxxl align-center text-red-500" />
      </div>
      <div className="flex align-center">
        PHP
        <DiPhp className="text-xxxxl align-center text-red-500" />
      </div>
      <div className="flex align-center">
        JavaScript
        <DiJavascript className="text-xxxxl align-center text-red-500" />
      </div>
    </div>
  );
}

export default LanguagesBlock;
