import React, { createContext, useState } from 'react';

export const ContractContext = createContext();

function ContractContextProvider({ children }) {
  const [connectionStatus, setConnectionStatus] = useState(false);

  async function connect() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        window.ethereum.request({ method: 'eth_accounts' })[0];
        setConnectionStatus(true);
      } catch (error) {
        console.log(error);
      }
      //   connectButton.innerHTML = 'Connected';
      const address = await ethereum.request({ method: 'eth_accounts' });
      console.log(address);
    } else {
      //   setConnectionStatus(false);
      alert(
        'The metamask browser extension helps users connect their metamask crypto wallets to websites. It seems the extension is not installed on your browser. Please install the extension on your browser to be able to connect your metamask wallet to deeco.'
      );
    }
  }

  // async function getUserWalletAddress() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     const address = await ethereum.request({ method: 'eth_accounts' });

  //     return address;
  //   }
  // }

  async function checkMetamaskAccount() {
    // e.preventDefault();
    const userWalletAddress = await window.ethereum.request({ method: 'eth_accounts' });
    console.log(userWalletAddress.length);

    if (typeof window.ethereum !== 'undefined' && userWalletAddress.length !== 0) {
      console.log(userWalletAddress);
      setConnectionStatus(true);
      // console.log(connectionStatus);
    } else {
      setConnectionStatus(false);
      // console.log(connectionStatus);

      alert('Please connect your wallet to start shopping');
    }
  }

  return (
    <ContractContext.Provider
      value={{ connect, connectionStatus, setConnectionStatus, checkMetamaskAccount }}
    >
      {children}
    </ContractContext.Provider>
  );
}

export default ContractContextProvider;
