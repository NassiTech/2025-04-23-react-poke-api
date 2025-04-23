import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Impressum from "./components/Impressum";
import Contact from "./components/Contact";
import About from "./components/About";
import FAQ from "./components/FAQ";
import PokemonList from "./components/PokemonList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/impressum" element={<Impressum></Impressum>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/FAQ" element={<FAQ></FAQ>}></Route>
        <Route
          path="/pokemonlist"
          element={<PokemonList></PokemonList>}
        ></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
