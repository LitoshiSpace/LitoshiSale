//  Dependencies
// ===========================================================

import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

//  Assets
// ===========================================================

import stars from "#assets/svg/stars.svg";
import Planets from "#assets/img/Planets.svg";
import Planet from "#assets/img/Planet.svg";
import newlogo from "#assets/svg/logo.svg";
import Discord from "#assets/logo/discord.svg";
import Gitbook from "#assets/logo/gitbook.svg";
import Github from "#assets/logo/github.svg";
import Medium from "#assets/logo/medium.svg";
import Twitter from "#assets/logo/twitter.svg";

//  Components
// ===========================================================

function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-12 gap-6 bottom-0 absolute">
      <h3 className="text-xl text-white text-center font-semibold">
        Find us on
      </h3>
      <div className="w-full h-full flex justify-center items-center gap-6">
        <a href="https://discord.com/invite/litoshimarket">
          <img src={Discord} alt="" />
        </a>
        <a href="https://twitter.com/Litoshimarket">
          <img src={Twitter} alt="" />
        </a>
        <a href="https://medium.com/@litebitmarket">
          <img src={Medium} alt="" />
        </a>
        <a href="https://github.com/LitoshiSpace">
          <img src={Github} alt="" />
        </a>
        <a href="https://litoshi-market.gitbook.io/litoshi-market/">
          <img src={Gitbook} alt="" />
        </a>
      </div>
    </div>
  );
}

//  Route
// ===========================================================

export const Home = ({ children }) => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full bg-[#151516] flex justify-center items-center overflow-hidden">
        <img src={stars} alt="" className="stars" />
        <img src={newlogo} alt="" className="newlogo" />
        <div className="nouvelleflex">
          <div className="ellipseglobal">
            <div className="ellipse"></div>
            <div className="ellipse2"></div>
            <div className="ellipse3"></div>
          </div>
          <img src={Planet} alt="" className="planet" />
        </div>
      </div>
      <div className="w-full h-full fixed top-0 left-0 z-10 overflow-y-auto">
        {children}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};
