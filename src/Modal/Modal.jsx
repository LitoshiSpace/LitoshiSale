import React, { useState } from "react";
import "./Modal.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({onAddressChange }) {
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

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Connect your Wallet
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2></h2>
            {isConnected}
            <button className="modal-connect" onClick={requestUnisatAccounts}>
              UniSat Wallet
            </button>
            <button className="modal-connect" onClick={requestLitescribeAccounts}>
              Litescribe Wallet
            </button>
            <button className="close-modal" onClick={toggleModal}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
