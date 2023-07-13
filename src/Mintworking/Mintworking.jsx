import React, { useState, useEffect } from "react";
import newlogo from "#img/newlogo.svg";
import Planets from "#img/Planets.svg";
import Planet from "#img/Planet.svg";
import stars from "#img/Stars.svg";
import "./Mintworking.css";
import { Button } from "#components/Elements";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Mintworking() {
  const { wallet, setWallet, option, setOption } = useOutletContext();
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(""); // Nouvel état pour la valeur sélectionnée

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue); // Met à jour la valeur sélectionnée
    setOption(selectedValue); // Met à jour l'option dans le contexte ou l'état existant si nécessaire
  };

  const options = ["500$LTSI", "1000$LTSI", "1500$LTSI", "2000$LTSI"];

  return (
    <>
      <div className="nouvellemax">
        <img src={stars} alt="" className="stars" />
        <img src={newlogo} alt="" className="newlogo" />
        <img src={Planets} alt="" className="planetwork" />
        <div className="nouvelleflex">
          <img src={Planet} alt="" className="planet" />
          <div className="progressbar_bg">
            <div className="progressbar">
              <p>20%</p>
            </div>
          </div>
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
          <div className="mintwork_buttonflex">
            {!wallet && (
              <h6 className="text-white text-center font-semibold uppercase">
                Connect your wallet
              </h6>
            )}
            <div className="mintwork_buttonoption">
              <h6 className="text-white text-center font-semibold uppercase">
                Choose an option: {option}
              </h6>
              {["500$LTSI"].map((item) => (
                <select
                  value={option}
                  className="bg-[#ffffff50] px-6 py-3"
                  onChange={handleOptionChange}
                >
                  {options.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              ))}
            </div>
            <Button
              className="bg-[#ffffff50] px-6 py-3"
              onClick={() => navigate("/mint/buy")}
            >
              <span className="text-xl text-white text-center font-semibold uppercase">
                Create a new order
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
