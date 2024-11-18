import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = {
  colorScheme: "dark",
  colors: {
    dark: [
      "#101010",
      "#181818",
      "#202020",
      "#282828",
      "#303030",
      "#383838",
      "#404040",
      "#484848",
      "#505050",
      "#585858",
    ],
    blue: [
      "#EAF6FF",
      "#CCE4FF",
      "#99CCFF",
      "#66B3FF",
      "#3399FF",
      "#007FFF",
      "#0066CC",
      "#004C99",
      "#003366",
      "#001933",
    ],
  },
  fontFamilyMonospace: "Courier, sans serif",
  fontSizes: {
    md: "1rem",
  },
};
root.render(
  <MantineProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </MantineProvider>
);
