// imports
const { ethers, run, network } = require('hardhat');
// const ETHERSCAN_API_KEY = 'TYUVVR8XXECWNQPFNNDD7Y5KGGCTNV2E8W';

// async main
async function main() {
  const FundMeFactory = await ethers.getContractFactory('FundMe');
  console.log('Deploying contract...');
  const fundMe = await FundMeFactory.deploy();
  await fundMe.deployed();
  console.log(`Deployed contract to: ${fundMe.address}`);
  // what happens when we deploy to our hardhat network?
  // if (network.config.chainId === 80001 && ETHERSCAN_API_KEY) {
  //   console.log('Waiting for block confirmations...');
  //   // await fundMe.deployTransaction.wait(6);
  //   // await verify(fundMe.address, []);
  // }

  // const currentValue = await simpleStorage.retrieve();
  // console.log(`Current Value is: ${currentValue}`);

  // Update the current value
  // const transactionResponse = await simpleStorage.store(7);
  // await transactionResponse.wait(1);
  // const updatedValue = await simpleStorage.retrieve();
  // console.log(`Updated Value is: ${updatedValue}`);
}

// dev: disabled programmatic verification - it seems etherscan does not support programmatic verification for the mumbai network

// async function verify(contractAddress, args) {
//   const verify = async (contractAddress, args) => {
//     console.log('Verifying contract...');
//     try {
//       await run('verify:verify', {
//         address: contractAddress,
//         constructorArguments: args
//       });
//     } catch (e) {
//       if (e.message.toLowerCase().includes('already verified')) {
//         console.log('Already Verified!');
//       } else {
//         console.log(e);
//       }
//     }
//   };
// }

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// }
