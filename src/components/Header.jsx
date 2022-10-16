import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-6 rounded flex-auto">
      <div className="bg-black p-4 rounded">
        <div className="flex items-center justify-between flex-wrap">
          <div className="block">
            <Link to="/Home"><span className="font-semibold text-xxxl tracking-tight text-green-500 wiggle">Welcome</span></Link>
          </div>
          <nav className="block">
            <Link to="/Home"><span className="inline-block text-green-500 hover:text-white mr-4">home</span></Link>
            <Link to="/About"><span className="inline-block text-green-500 hover:text-white mr-4">about</span></Link>
            <Link to="/Stack"><span className="inline-block text-green-500 hover:text-white mr-4">my stack</span></Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
export default Header

