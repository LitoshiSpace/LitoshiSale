//  Dependencies
// ===========================================================

import React, { useState } from "react";
import "./index.css";
import { Home } from "#layouts";

//  Components
// ===========================================================

import Modal from "#components/Modal/Modal";

//  Page
// ===========================================================

export default function Page() {
  // const handleTweet = () => {
  //   const tweetText = `This is my claim proof @Litoshimarket                                      Claim it here: https://www.litoshi.app/\n\nMy address : ${address}`;
  //   const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  //     tweetText
  //   )}`;
  //   window.open(tweetUrl, "_blank");
  // };

  return (
    <Home>
      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-black font-bold text-5xl">Time to Mint </h1>
        <p className="max-w-lg text-center text-black font-semibold text-2xl">
          Join one of the greatest Ordinals adventures. Everything begins with a
          Big Bang.
        </p>
        <div className="nouvelle_landing_buttontweet">
          <Modal />
        </div>
      </div>
    </Home>
  );
}
