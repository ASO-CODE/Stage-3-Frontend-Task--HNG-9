import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import CloseIcon from "../../assets/close.svg";
import MetaIcon from "../../assets/Metamask Icon.svg";
import WalletConnectIcon from "../../assets/Wallet Coonect Icon.svg";
import Chevron from "../../assets/Down Chevron.svg";

function Modal({ setOpenModal }) {
  return ReactDOM.createPortal(
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modalTitle">
            <h1>Connect Wallet</h1>
            <button onClick={() => setOpenModal(false)}>
              <img src={CloseIcon} alt="close icon" />
            </button>
          </div>
          <div className="underline"></div>
          <div className="subTitle">
            <p>Choose your preferred wallet:</p>
          </div>
          <a href="/" className="metaMaskBtn">
            <span>
              <img src={MetaIcon} alt="meta icon" />
              <p>Metamask</p>
            </span>
            <img src={Chevron} className="chevron" alt="chevron icon" />
          </a>
          <a href="/" className="walletConnectBtn">
            <span>
              <img src={WalletConnectIcon} alt="meta icon" />
              <p>WalletConnect</p>
            </span>
            <img src={Chevron} className="chevron" alt="chevron icon" />
          </a>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
