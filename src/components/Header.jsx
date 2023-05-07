import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-black p-4 text-sky-400">
      <nav className="justify-between items-center">
        <span className="text-xl hover:text-red-500">
          <Link to="/Home" className="text-left">
            /paddy.software/
          </Link>
        </span>
        <div>
          <Link to="/Home">
            <span className="hover:text-red-500 mr-2">home</span>
          </Link>
          <span>/</span>
          <Link to="/About">
            <span className="hover:text-red-500 mx-2">about</span>
          </Link>
          <span>/</span>
          <Link to="/Stack">
            <span className="hover:text-red-500 mx-2">my stack</span>
          </Link>
          <span>/</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
