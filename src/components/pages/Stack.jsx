import React from "react";

export default function Stack() {
  return (
    <>
      <div className="block bg-black text-green-500 p-4 m-6 rounded content-center w-4/5 text-center">
        <h1 className="block text-xxxl mr-2 font-semibold text-center w-fit-content">
          My stack
        </h1>
        <p>
          I've been lucky enough to be exposed to a good variety of
          technologies, languages and frameworks. However the languages I tend
          to resort to by default is Java and Python. Through my career I hope
          to expand my knowledge and experience of different tech as I'm always
          up for learning something new. Recently I have taken a large interest
          in ML, learning PyTorch and other supporting libraries.
        </p>

        <div className="bg-black rounded flex overflow-hidden mt-3">
          <div className="bg-gray-900 p-2 mr-1 rounded w-1/2 flex flex-col px-2">
            <h1 className="text-xxl font-bold mb-2">Frameworks and Tools</h1>
            <p>ASP.Net - Bootstrap - React - Tailwind - PyTorch</p>
          </div>
          <div className="bg-gray-900 p-2 rounded w-1/2 flex flex-col px-2">
            <h1 className="text-xxl font-bold mb-2">Languages</h1>
            <p>
              Java - Haskell - C# - Javascript - HTML - CSS - SQL - PHP - Python
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
