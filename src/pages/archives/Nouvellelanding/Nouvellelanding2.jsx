import React from "react";
import "./Nouvellelanding2.css";
import stars from "./Stars.svg";
import Background from "./Background.svg";
import Planet from "./Planet2.svg";
import Discord from "./discordapp logo.svg";
import Gitbook from "./gitbook logo.svg";
import Github from "./GitHub logo.svg";
import Medium from "./medium logo.svg";
import Twitter from "./twitter logo.svg";
import Planets from "./Planets.svg";

export default function Nouvellelanding() {
  return (
    <>
      <div className="nouvellemax">
        <img src={stars} alt="" className="stars" />
        <div className="nouvelleflex">
          <div className="ellipseglobal">
            <div className="ellipsev0"></div>
            <div className="ellipsev1"></div>
            <div className="ellipsev2"></div>
            <div className="ellipsev3"></div>
            <div className="ellipsev4"></div>
            <div className="planet-1"></div>
            <div className="planet-2"></div>
            <div className="planet-3"></div>
            <div className="planet-4"></div>
            <div className="planet-5"></div>
            <div className="planet-6"></div>
          </div>
          <img src={Planet} alt="" className="planet" />
        </div>
        <div className="nouvelle_landing_content2">
          <div>
            <h1>Join the Ordinals Space</h1>
            <p>
              Discover and navigate through NFT & Token Ordinals. We are present
              on the Bitcoin , Litecoin & Dogecoin Blockchains. Manage, Track &
              Interact with the market
            </p>
          </div>
          <div className="nouvelle_landing_buttontweet2">
            <button type="button">Launch App</button>
          </div>
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
            <a href="https://github.com/Litoshimarket">
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
