import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
