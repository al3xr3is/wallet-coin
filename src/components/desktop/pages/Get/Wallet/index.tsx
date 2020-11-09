import React from 'react'
import './styles.css'

import Navbar from '../../../ui/Navbar'

import WalletWindows from '../../../../../assets/img/wallet-logo-windows.png'
import WalletMac from '../../../../../assets/img/wallet-logo-mac.png'
import WalletLinux from '../../../../../assets/img/wallet-logo-linux.png'
import WalletLedger from '../../../../../assets/img/wallet-logo-ledger.png'

export default function Wallet() {
  return (
    <div className="container-wallet" id="wallet">
      <Navbar />
      <h1>Wallets</h1>
      <p>Download yout QT wallet here!</p>

      <div className="grid-wallet">
        <a href="https://github.com/" rel="noreferrer" target="_blank">
          <div className="card card-1">
            <img src={WalletWindows} alt="logo windows" />
          </div>
          <h2>Windows</h2>
        </a>
        <a href="https://github.com/" rel="noreferrer" target="_blank">
          <div className="card card-2">
            <img src={WalletMac} alt="logo mac" />
          </div>
          <h2>Mac</h2>
        </a>
        <a href="https://github.com/" rel="noreferrer" target="_blank">
          <div className="card card-3">
            <img src={WalletLinux} alt="logo linux" />
          </div>
          <h2>Linux</h2>
        </a>
        <a href="https://github.com/" rel="noreferrer" target="_blank">
          <div className="card card-4">
            <img src={WalletLedger} alt="logo ledger" />
          </div>
          <h2>Ledger Wallet</h2>
        </a>
      </div>

      <h3>Do not forget:</h3>
      <p>Exchange is not a wallet. Your coins are only safe when you have access to your private keys.</p>
    </div>
  )
}