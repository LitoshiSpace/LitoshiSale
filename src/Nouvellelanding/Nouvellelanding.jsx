import React, { useState } from "react";
import "./Nouvellelanding.css";
import stars from "./Stars.svg";
import Background from "./Background.svg";
import Planet from "./Planet.svg";
import Discord from "./discordapp logo.svg";
import Gitbook from "./gitbook logo.svg";
import Github from "./GitHub logo.svg";
import Medium from "./medium logo.svg";
import Twitter from "./twitter logo.svg";
import newlogo from "./newlogo.svg";
import Modal from "../Modal/Modal";
import { BrowserRouter, Link } from "react-router-dom";

export default function Nouvellelanding() {
  const [address, setAddress] = useState("");

  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };

  const handleTweet = () => {
    const tweetText = `This is my claim proof @Litoshimarket                                      Claim it here: https://www.litoshi.app/\n\nMy address : ${address}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <>
      <div className="nouvellemax">
        <img src={stars} alt="" className="stars" />
        <img src={newlogo} alt="" className="newlogo" />
        <div className="nouvelleflex">
          <div className="ellipseglobal">
            <div className="progressbar_bg">
              <div className="progressbar">
                <p>20%</p>
              </div>
            </div>
            <div className="ellipse"></div>
            <div className="ellipse2"></div>
            <div className="ellipse3"></div>
          </div>
          <img src={Planet} alt="" className="planet" />
        </div>
        <div className="nouvelle_landing_content">
          <div>
            <h1>Time to Mint </h1>
            <p>
              Join one of the greatest Ordinals adventures. Everything begins
              with a Big Bang.
            </p>
          </div>
          {address.length === 0 ? (
            <Modal address={address} onAddressChange={handleAddressChange} />
          ) : (
            <div className="nouvelle_landing_buttontweet">
              <Link to="/minting">
                <button>Mint</button>
              </Link>
            </div>
          )}
        </div>
        <div className="nouvellelanding_footer">
          <p>Find us on</p>
          <div className="nouvellelanding_lien">
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
      </div>
    </>
  );
}
