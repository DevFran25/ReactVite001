import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

//Elemento que queremos renderizar
const root = createRoot(document.getElementById("root"));

root.render(<App />);
