import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link } from 'react-router-dom';

function Header() {
    return(
    <header className="bg-gray-100 p-6">
    <div className="flex items-center justify-between flex-wrap">
      <div className="block">
        <Link to="/"><span className="font-semibold text-xl tracking-tight text-gray-800">Title Goes Here</span></Link>
      </div>
      <nav className="block">
        <Link to="/"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">home</span></Link>
        <Link to="/about"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">about</span></Link>
        <Link to="/stack"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">my stack</span></Link>
      </nav>
    </div>
    </header>
    )
}
export default Header

