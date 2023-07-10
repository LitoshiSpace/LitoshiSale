import React, { useState } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import unisat from "../img/wallet-logo.png";
import litescribe from "../img/litescribe-logo.png";
import dogchain from "../img/134824667.svg";

export default function Modal({ onAddressChange }) {
  const [modal, setModal] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const requestUnisatAccounts = async () => {
    try {
      const accounts = await window.unisat.requestAccounts();
      onAddressChange(accounts[0]);
      console.log("connect success", accounts);
      setIsConnected(true);
      toggleModal();
    } catch (e) {
      console.log("connect failed");
      setIsLoggedOut(true);
    }
  };

  const requestLitescribeAccounts = async () => {
    try {
      const accounts = await window.litescribe.requestAccounts();
      onAddressChange(accounts[0]);
      console.log("connect success", accounts);
      setIsConnected(true);
      toggleModal();
    } catch (e) {
      console.log("connect failed");
      setIsLoggedOut(true);
    }
  };

  const requestUnielonAccounts = async () => {
    try {
      const accounts = await window.unielon.requestAccounts();
      onAddressChange(accounts[0]);
      console.log("connect success", accounts);
      setIsConnected(true);
      toggleModal();
    } catch (e) {
      console.log("connect failed");
      setIsLoggedOut(true);
    }
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Mint
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2></h2>
            {isConnected}
            <div className="modal-flex">
              <div className="button-modal">
                <button
                  className="modal-connect"
                  onClick={requestUnisatAccounts}
                >
                  <img src={unisat} alt="" className="unisat-modal" />
                  UniSat Wallet
                </button>
              </div>
              <button
                className="modal-connect"
                onClick={requestLitescribeAccounts}
              >
                <img src={litescribe} alt="" className="unisat-modal" />
                Litescribe Wallet
              </button>
              <button
                className="modal-connect"
                onClick={requestUnielonAccounts}
              >
                <img src={dogchain} alt="" className="unisat-modal" />
                Unielon Wallet
              </button>
              <button className="close-modal" onClick={toggleModal}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
