//  Dependencies
// ===========================================================

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RouteNotLogged, RouteLogged } from '#routes';


//  Pages
// ===========================================================

import Home from "#pages/index";
import Mint from "#pages/Mint/index";


//  Page
// ===========================================================

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RouteNotLogged />}>
          <Route path="/*" element={<Home />} />
        </Route>
        <Route element={<RouteLogged />}>
          <Route path="/mint" element={<Mint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
