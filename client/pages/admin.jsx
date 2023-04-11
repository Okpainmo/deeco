import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import MainAppLayout from '../components/layout/MainAppLayout';
import { abi } from '../constants';

function Admin() {
  const contractAddress = '0x68bff6eb5c041a4ea8e45795af3554ba65aa3ce0';
  const [totalFunds, setTotalFunds] = useState('0 MAT');

  async function getBalance() {
    const userWalletAddress = await window.ethereum.request({ method: 'eth_accounts' });

    if (typeof window.ethereum !== 'undefined' && userWalletAddress.length !== 0) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      try {
        const balance = await provider.getBalance(contractAddress);
        console.log(ethers.utils.formatEther(balance));
        setTotalFunds(ethers.utils.formatEther(balance));
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('balance not found: please make sure your wallet is connected');
      console.log('balance not found: please make sure your wallet is connected');
    }
  }

  useEffect(() => {
    getBalance();
  }, []);

  async function withdraw() {
    function listenForTransactionMine(transactionResponse, provider) {
      console.log(`Mining ${transactionResponse.hash}`);
      return new Promise((resolve, reject) => {
        try {
          provider.once(transactionResponse.hash, (transactionReceipt) => {
            console.log(`Completed with ${transactionReceipt.confirmations} confirmations. `);
            resolve();
            window.location.reload();
          });
        } catch (error) {
          reject(error);
        }
      });
    }

    console.log(`Withdrawing...`);
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transactionResponse = await contract.withdraw();
        await listenForTransactionMine(transactionResponse, provider);
        // await transactionResponse.wait(1)
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('withdrawal not possible: please make sure your wallet is connected');
      console.log('withdrawal not possible: please make sure your wallet is connected');
    }
  }
  return (
    <MainAppLayout>
      <main className="admin-panel pt-[100px] px-4 min-h-[600px]">
        <section
          className="center-card px-4 w-full sm:w-[450px] mx-auto flex flex-col items-center justify-center min-h-[250px]"
          style={{ boxShadow: '0 0 15px 2px rgb(0 0 0 / 5%)' }}
        >
          <h1 className="mb-4 font-bold text-2xl">Total Wallet Balance</h1>
          <h3 className="text--colors_primary text-xl font-bold">
            {Number(totalFunds).toFixed(2)} MATIC
          </h3>
          <button
            onClick={withdraw}
            type="button"
            className="text-center w-full btn--colors_regular text--colors_default-invert px-6 py-3 mt-8 font-bold rounded"
          >
            withdraw funds
          </button>
        </section>
      </main>
    </MainAppLayout>
  );
}

export default Admin;
