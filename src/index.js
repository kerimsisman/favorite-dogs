import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { FavoritesContextProvider } from "./store/favorites-context";
import { RandomDataContextProvider } from "./store/random-data-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RandomDataContextProvider>
    <FavoritesContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </FavoritesContextProvider>
  </RandomDataContextProvider>
);
