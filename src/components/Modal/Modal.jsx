//  Dependencies
// ===========================================================

import React, { useState } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "#stores/components/settingsSlice";

//  Dependencies
// ===========================================================

import unisat from "#assets/wallets/unisat.png";
import litescribe from "#assets/wallets/litescribe.png";
import litex from "#assets/wallets/litex.png";
import dogchain from "#assets/wallets/dogchain.svg";

export default function Modal() {
  // Hooks
  const dispatch = useDispatch();
  const user = useSelector((state) => state.settings.user);

  // Variables
  const [modal, setModal] = useState(false);

  // Functions
  const requestUnisatAccounts = async () => {
    try {
      const accounts = await window.unisat.requestAccounts();
      dispatch(updateUser({ address: accounts[0] }));
      setModal(false);
    } catch (e) {
      dispatch(updateUser({}));
    }
  };

  const requestLitescribeAccounts = async () => {
    try {
      const accounts = await window.litescribe.requestAccounts();
      dispatch(updateUser({ address: accounts[0] }));
      setModal(false);
    } catch (e) {
      dispatch(updateUser({}));
    }
  };

  const requestLiteXAccounts = async () => {
    try {
      const accounts = await window.LiteX.requestAccounts();
      dispatch(updateUser({ address: accounts[0] }));
      setModal(false);
    } catch (e) {
      dispatch(updateUser({}));
    }
  };

  const removeAccount = () => {
    try {
      dispatch(updateUser({}));
      setModal(false);
    } catch (e) {
      dispatch(updateUser({}));
    }
  };

  return (
    <>
      {user?.address ? (
        <button
          onClick={() => removeAccount()}
          className="text-white text-xl font-semibold bg-[#ffffff50] py-3 px-6 rounded-lg"
        >
          {user?.address?.substring(0, 6)}
        </button>
      ) : (
        <button
          onClick={() => setModal(true)}
          className="text-white text-xl font-semibold py-3 px-6 rounded-lg "
        >
          {"Mint"}
        </button>
      )}
      {modal && (
        <div className="w-full h-full fixed top-0 left-0 z-[100] bg-[#00000000] backdrop-blur">
          <div onClick={() => setModal(false)} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-flex justify-center">
              <div className="button-modal"></div>
              <button
                className="modal-connect"
                onClick={requestLitescribeAccounts}
              >
                <img src={litescribe} alt="" className="unisat-modal" />
                Litescribe Wallet
              </button>
              <button
                className="modal-connect"
                onClick={requestLiteXAccounts}
              >
                <img src={litex} alt="" className="unisat-modal" />
                LiteX Wallet
              </button>
              <button className="close-modal" onClick={() => setModal(false)}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
