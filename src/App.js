import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Stack from  './components/pages/Stack';
import About from './components/pages/About';
import Home from './components/pages/Home';

function App() {
  return (
    <body class="h-screen bg-gradient-to-b 
    from-black 
    to-black
    via-gray-900" >
    <Header/>
  
        <Routes>
          <Route exact path="/Home" element={<Home/>}>
          </Route>

          <Route exact path="/About" element={<About/>}>
          </Route>

          <Route exact path="/Stack" element={<Stack/>}>
          </Route>

        </Routes>
      </body>
  );
}

export default App;
