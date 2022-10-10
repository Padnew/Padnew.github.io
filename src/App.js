import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header.jsx';

function App() {
  return (
    <Router>
    <Header />
    </Router>
  );
}

export default App;
