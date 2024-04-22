// App.jsx
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./counterr1";
// Assuming correct import name

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Counter />
  </StrictMode>
);
