import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-black p-4 text-sky-400">
      <nav className="justify-between items-center">
        <span className="text-xl">/paddy.software/</span>
        <div>
          <Link to="/home">
            <span className="hover:text-red-500 mr-2">home</span>
          </Link>
          <span>/</span>
          <Link to="/studies">
            <span className="hover:text-red-500 mx-2">studies</span>
          </Link>
          <span>/</span>
          <Link to="/stack">
            <span className="hover:text-red-500 mx-2">my stack</span>
          </Link>
          <span>/</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
