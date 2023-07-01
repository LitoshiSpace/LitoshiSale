import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const requestAccounts = async () => {
    try {
      const accounts = await window.unisat.requestAccounts();
      setAddress(accounts[0]);
      console.log('connect success', accounts);
      setIsConnected(true);
      toggleModal();
    } catch (e) {
      console.log('connect failed');
      setIsLoggedOut(true);
    }
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Connect a Wallet</h2>
            <p>
              {isConnected}
              <button onClick={requestAccounts}>Connect your Unisat Wallet</button>
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
