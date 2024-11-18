import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import TechStack from "./components/pages/stack";
import Studies from "./components/pages/studies";
import Home from "./components/pages/home";
import Experience from "./components/pages/experience.jsx";
import { Stack, Box } from "@mantine/core";
import Classes from "./App.module.scss";
function App() {
  return (
    <Box className={Classes.global}>
      <Header />
      <Stack justify="center" align="center">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/home" element={<Home />}></Route>

          <Route exact path="/studies" element={<Studies />}></Route>

          <Route exact path="/stack" element={<TechStack />}></Route>

          <Route exact path="/experience" element={<Experience />}></Route>
        </Routes>
      </Stack>
    </Box>
  );
}

export default App;
