import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Stack from "./components/pages/stack";
import Studies from "./components/pages/studies";
import Home from "./components/pages/home";

function App() {
  return (
    <div
      className="h-screen w-screen
    bg-gradient-to-b
    from-black 
    to-black
    via-gray-900
    font-mono
    overflow-auto
    text-sky-600
    text-base
    border-sky-500
    "
    >
      <Header />
      <div className="flex flex-col items-center">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/home" element={<Home />}></Route>

          <Route exact path="/studies" element={<Studies />}></Route>

          <Route exact path="/stack" element={<Stack />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
