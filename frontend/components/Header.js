import React from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import Login from "./Login";

export const injected = new InjectedConnector({
  supportedChainIds: [3, 58, 137, 1337],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 3: "https://ropsten.infura.io/v3/" },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: 12000,
});

const Header = () => {
  const context = useWeb3React();
  const { library, account, chainId, activate, deactivate, active } = context;

  const handleConnectWallet = async () => {
    if (!active) {
      await activate(injected, (e) => {
        let error = e.message;
        if (error?.indexOf("Unsupported chain id") !== -1) {
          deactivate();
          console.log("Unsupported chain");
        } else if (error?.indexOf("No Ethereum provider") !== -1) {
          console.log("No ethereum provider");
        } else {
          console.log("OK");
        }
      });
    }
  };

  const handleConnectWalletWalletConnect = async () => {
    if (!active) {
      await activate(walletconnect, (e) => {
        console.log(e.message);
      });
    }
  };

  const handleDisconnectWallet = async () => {
    if (active) {
      deactivate();
    }
  };

  return (
    <div
      className="header-container"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      Active account: {active ? "ACTIVE" : "NOT ACTIVE"}
      {!active &&
        <>
          <button onClick={handleConnectWallet}>Connect Wallet</button>
          <button onClick={handleConnectWalletWalletConnect}>Connect Wallet WalletConnect</button>
        </>
      }
      {active &&
        <>
          <button>{account.substring(0, 4) + "..." + account.substring(38, 42)}</button>
          <button onClick={handleDisconnectWallet}> Disconnect Wallet</button>
          <Login/>
        </>
      }
    </div>
  );
};

export default Header;
