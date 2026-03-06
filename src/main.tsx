import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { MovimientosProvider } from "./context/MovimientosContext";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MovimientosProvider>
          <App />
      </MovimientosProvider>
    </BrowserRouter>
  </StrictMode>,
);
