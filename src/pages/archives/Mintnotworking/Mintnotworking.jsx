import React from "react";
import newlogo from "#assets/img/newlogo.svg";
import "./Mintnotworking.css";
import Discord from "#assets/img/discordapp logo.svg";
import Gitbook from "#assets/img/gitbook logo.svg";
import Github from "#assets/img/GitHub logo.svg";
import Medium from "#assets/img/medium logo.svg";
import Twitter from "#assets/img/twitter logo.svg";
import pleure from "#assets/img/crying-face.svg";
import info from "#assets/img/Info.svg";

export default function Mint() {
  return (
    <>
      <div className="screen">
        <img src={newlogo} alt="" className="newlogo" />
        <div className="mintnot_content_global">
          <div className="mintnot_content">
            <div className="mintnot-title">
              <h1>Oops !</h1>
              <p>Something is wrong</p>
            </div>
            <div className="mintnot_content_flex">
              <img src={info} alt="" />
              <p>Your not whitelisted</p>
            </div>
          </div>
          <div className="mintnot_emoji">
            <img src={pleure} alt="" />
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
