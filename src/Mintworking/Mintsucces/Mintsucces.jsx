import React from "react";
import newlogo from "#img/newlogo.svg";
import "./Mintsucces.css";
import Discord from "#img/discordapp logo.svg";
import Gitbook from "#img/gitbook logo.svg";
import Github from "#img/GitHub logo.svg";
import Medium from "#img/medium logo.svg";
import Twitter from "#img/twitter logo.svg";
import hearthhand from "#img/hearthhand.svg";
import infogreen from "#img/Infogreen.svg";

export default function Mint() {
  return (
    <>
      <div className="screen">
        <img src={newlogo} alt="" className="newlogo" />
        <div className="mintnot_content_global">
          <div className="mintnot_content">
            <div className="mintsucces-title">
              <h1>All good !</h1>
              <p>
                You will receive your tokens shortly To check, go to{" "}
                <span>litescribe </span>
                and enter your address
              </p>
            </div>
            <div className="mintsucces_content_flex">
              <img src={infogreen} alt="" />
              <p>Payment has been received</p>
            </div>
          </div>
          <div className="mintnot_emoji">
            <img src={hearthhand} alt="" />
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
