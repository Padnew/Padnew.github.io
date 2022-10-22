import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Stack from "./components/pages/Stack";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

function App() {
  return (
    <div
      className="h-screen w-screen
    bg-gradient-to-b 
    from-black 
    to-black
    via-gray-900
    flex
    flex-col
    items-center
    font-mono
    "
    >
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route exact path="/Home" element={<Home />}></Route>

        <Route exact path="/About" element={<About />}></Route>

        <Route exact path="/Stack" element={<Stack />}></Route>
      </Routes>
    </div>
  );
}

export default App;
