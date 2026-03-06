import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProviders } from "./context/ContextProviders";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProviders>
        <App />
      </ContextProviders>
    </BrowserRouter>
  </StrictMode>,
);
