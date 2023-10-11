import { createRoot, render } from "react-dom/client";
import * as React from "react";
import App from "./App";

const container = document.getElementById("app-container");
const root = createRoot(container);
root.render(<App />);
