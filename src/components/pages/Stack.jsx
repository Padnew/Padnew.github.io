import React from "react";
// Commented out for testing
// import {  DiPython, DiJava, DiJavascript, DiCss3, DiPhp, DiBootstrap, DiDotnet, DiHaskell , DiCode, DiDatabase, DiReact, } from 'react-icons/di';
export default function Stack() {
  return (
    <>
      <div className="block bg-black text-green-500 p-4 m-6 rounded content-center w-3/5">
        <h1 className="block text-xxxl text-green-500 mr-4 font-semibold text-center w-fit-content">
          My stack
        </h1>
        <p>
          I've been lucky enough to be exposed to a good variety of
          technologies, languages and frameworks. However the languages I tend to
          resort to by default is Java and Python. Through my career I hope to expand my
          knowledge and experience of different tech as I'm always up for
          learning something new. Recently I have taken a large interest in ML, learning PyTorch and other supporting libraries.
        </p>

        <div className="bg-black text-green-500 rounded text-center overflow-y-auto overflow-x-hidden">
          <div className="bg-gray-900 text-green-500 p-4 my-2 rounded">
            <h1 className="text-xxl font-bold">Frameworks and Tools</h1>
            {/* <h3 className="flex align-middle"><DiDotnet />ASP.NET - <DiBootstrap/>Bootstrap - <DiReact/>React - <DiCode/>Tailwind</h3> */}
            ASP.Net - Bootstrap - React - Tailwind - PyTorch
          </div>
          <div className="bg-gray-900 text-green-500 p-4 my-2 rounded h-fit-content overflow-y-scroll overflow-x-hidden">
            <h1 className="text-xxl font-bold">Languages</h1>
            {/* <h3 className="align-middle"><DiJava/>Java - <DiCode/>C# - <DiHaskell/>Haskell - <DiJavascript/>Javascript - <DiCode/>HTML - <DiCss3/>CSS - <DiDatabase/>SQL - <DiPhp/>PHP - <DiPython/>Python</h3> */}
            Java - Haskell - C# - Javascript - HTML - CSS - SQL - PHP - Python
          </div>
          {/* <div className="bg-gray-900 text-green-500 p-4 my-2 rounded">
            <h1 className="text-xxl font-bold">Miscellaneous</h1>
            -
          </div> */}
        </div>
      </div>
    </>
  );
}
