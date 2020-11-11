import React from 'react'
import './styles.css'

import WalletWindows from '../../../../../assets/img/wallet-logo-windows.png'
import WalletMac from '../../../../../assets/img/wallet-logo-mac.png'
import WalletLinux from '../../../../../assets/img/wallet-logo-linux.png'
import WalletLedger from '../../../../../assets/img/wallet-logo-ledger.png'

export default function Wallet() {
  return (
    <div className="container-wallet" id="wallet">
      
      <h1>Wallets</h1>
      <p>Download your QT wallet here!</p>

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

      <h2>Do not forget:</h2>
      <p>Exchange is not a wallet. Your coins are only safe <br/> when you have access to your private keys.</p>
    </div>
  )
}