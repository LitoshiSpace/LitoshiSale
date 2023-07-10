import React from "react";
import newlogo from "#img/newlogo.svg";
import Planets from "#img/Planets.svg";
import Planet from "#img/Planet.svg";
import stars from "#img/Stars.svg";
import "./Mintworking.css";

export default function Mintworking() {
  return (
    <>
      <div className="nouvellemax">
        <img src={stars} alt="" className="stars" />
        <img src={newlogo} alt="" className="newlogo" />
        <img src={Planets} alt="" className="planetwork" />
        <div className="nouvelleflex">
          <img src={Planet} alt="" className="planet" />
        </div>
        <div className="mintno_work_content">
          <div>
            <p>
              It's time to choose the address to which you want to receive your
              $LTSI tokens
            </p>
          </div>
          <div className="mintno_work_content_input">
            <input type="text" placeholder="Your LTC address" />
          </div>
        </div>
      </div>
    </>
  );
}
