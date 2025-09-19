import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./src/App";

const el = document.getElementById("root");

if (el) {
  const root = createRoot(el);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error("Could not find root element");
}
