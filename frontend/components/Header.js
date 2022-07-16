import React from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [3, 58, 137],
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
        error = e.message;
        if (error?.indexOf("Unsupported chain id") !== -1) {
          deactivate();
          console.log("Unsupported chain");
          return;
        } else if (error?.indexOf("No Ethereum provider") !== -1) {
          console.log("No ethereum provider");
          return;
        } else {
          console.log("OK");
        }
      });
    }
  };

  const handleConnectWalletWalletConnect = async () => {
    if (!active) {
      let error;
      await activate(walletconnect, (e) => {
        error = e.message;
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
      <button onClick={handleConnectWallet}>
        {active
          ? account.substring(0, 4) + "..." + account.substring(38, 42)
          : "Connect Wallet"}
      </button>
      <button onClick={handleConnectWalletWalletConnect}>
        {active
          ? account.substring(0, 4) + "..." + account.substring(38, 42)
          : "Connect Wallet WalletConnect"}
      </button>
      {active && (
        <button onClick={handleDisconnectWallet}> Disconnect Wallet </button>
      )}
    </div>
  );
};

export default Header;
