import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InfoContext } from "./components/context/InfoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfoContext>
      <App />
    </InfoContext>
  </React.StrictMode>
);
