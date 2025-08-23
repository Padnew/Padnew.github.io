import "./App.css";
import Content from "./components/Content.jsx";
import Classes from "./App.module.scss";
import { Container } from "comitium-ui";
function App() {
  return (
    <Container className={Classes.global}>
      <Content className={Classes.global} />
    </Container>
  );
}

export default App;
