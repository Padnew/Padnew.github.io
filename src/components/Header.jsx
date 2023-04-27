import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
      <div className="bg-black p-4">
          {/* <div className="block">
            <Link to="/Home">
              <span className="font-semibold text-xxxl text-green-500">
                Welcome
              </span>
            </Link>
          </div> */}
          <nav className="block text-right">
            <Link to="/Home">
              <span className="inline-block text-green-500 hover:text-white mr-4">
                home
              </span>
            </Link>
            <Link to="/About">
              <span className="inline-block text-green-500 hover:text-white mr-4">
                about
              </span>
            </Link>
            <Link to="/Stack">
              <span className="inline-block text-green-500 hover:text-white mr-4">
                my stack
              </span>
            </Link>
          </nav>
      </div>
  );
}
export default Header;
