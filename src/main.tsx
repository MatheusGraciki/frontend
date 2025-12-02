import React from "react";
import ReactDOM from "react-dom/client";
import "src/Styles/theme.scss";
import { ThemeProvider } from "src/Context/ThemeContext"; 
import { BrowserRouter } from "react-router-dom";

import AutoRoutes from "./App/AutoRoutes";
import ToastProvider from 'src/Components/Toast';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AutoRoutes />
      </BrowserRouter>
      <ToastProvider />
    </ThemeProvider>
  </React.StrictMode>
);
