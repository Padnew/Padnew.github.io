import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-black p-4 text-green-500">
      {/* <div className="block">
            <Link to="/Home">
              <span className="font-semibold text-xxxl text-green-500">
                Welcome
              </span>
            </Link>
          </div> */}
      <nav className="block text-right">
        <span className=" float-left text-xxl">/Paddy.software/</span>
        <Link to="/Home">
          <span className="inline-block hover:text-white mr-2">home</span>
        </Link>
        <span>/</span>
        <Link to="/About">
          <span className="inline-block hover:text-white mx-2">about</span>
        </Link>
        <span>/</span>
        <Link to="/Stack">
          <span className="inline-block hover:text-white mx-2">my stack</span>
        </Link>
        <span>/</span>
      </nav>
    </div>
  );
}
export default Header;
