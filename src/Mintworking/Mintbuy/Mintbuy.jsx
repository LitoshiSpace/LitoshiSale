import React from "react";
import newlogo from "#img/newlogo.svg";
import Discord from "#img/discordapp logo.svg";
import Gitbook from "#img/gitbook logo.svg";
import Github from "#img/GitHub logo.svg";
import Medium from "#img/medium logo.svg";
import Twitter from "#img/twitter logo.svg";
import info from "#img/info.svg";
import hearth from "#img/hearth.svg";
import arrow from "#img/arrow.svg";
import timer from "#img/timer1.svg";
import "./Mintbuy.css";

export default function Mintbuy() {
  return (
    <>
      <div className="nouvellemax">
        <img src={newlogo} alt="" className="newlogo" />
        <div className="mintbuy_global">
          <div className="mintbuy_flex">
            <div className="mintbuy_whitelisted">
              <div className="mintbuy_flex_content">
                <img src={hearth} alt="" />
                <p>Good news you are whitelisted</p>
              </div>
            </div>
            <div className="mintbuy_learn">
              <div className="mintbuy_flex_content_learn">
                <p>Learn to mint</p>
                <button type="button">
                  How to mint $LTSI <img src={arrow} alt="" />
                </button>
              </div>
            </div>
            <div className="mintbuy_reminder">
              <div className="mintbuy_flex_content_reminder">
                <img src={info} alt="" />
                <p>Reminder</p>
              </div>
              <p className="mintbuy_flex_content_reminderv2">
                Don't refresh the page, just wait for a confirmation message to
                appear. If no message appears after you've paid, contact us on
                discord by creating a ticket.
              </p>
            </div>
          </div>
          <div className="mintbuy_amount">
            <div className="mintbuy_amount_content">
              <p className="mintbuy_amount_grey">Your amount</p>
              <button>500 $LTSI</button>
            </div>
            <div className="mintbuy_amount_content">
              <p className="mintbuy_amount_grey">Your address </p>
              <span>ltc1qd2qzngwyu876s[...]l3045pup8</span>
            </div>
            <div className="mintbuy_amount_content">
              <p className="mintbuy_amount_grey">Payment adress</p>
              <span>ltc1qd2qzngwyu876s[...]l3045pup8</span>
            </div>
            <div className="mintbuy_amount_content">
              <p className="mintbuy_amount_grey">Deposit amount</p>
              <span>0.01999 $LTC</span>
            </div>
            <div className="mintbuy_amount_timer">
              <img src={timer} alt="" />
              <p>23:59:48</p>
            </div>
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
