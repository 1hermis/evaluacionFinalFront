import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextoProvider } from "./Components/utils/global.context"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextoProvider>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index path="/home" element={<Home />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </ContextoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
