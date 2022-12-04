require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
// require('@nomiclabs/hardhat-waffle');
// require('hardhat-gas-reporter');
// require('./tasks/block-number');
// require('dotenv').config();
// require('solidity-coverage');

/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// contract address: 0x38DB1A5cAf3CdCed67468007Ae341b21057D5Ce0

// const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || '';
const MUMBAI_RPC_URL =
  process.env.MUMBAI_RPC_URL ||
  'https://polygon-mumbai.g.alchemy.com/v2/tDEwU3NSE0V_JfXYt6khFHL2nAFDmwNs';
const PRIVATE_KEY =
  process.env.PRIVATE_KEY || 'a39176c885deefc66ede329883c2cf9ba2480d39162247a62b0a749bfbb95e30';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || 'TYUVVR8XXECWNQPFNNDD7Y5KGGCTNV2E8W';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001
    }
  },
  solidity: '0.8.8',
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
  // gasReporter: {
  //   enabled: true,
  //   currency: 'USD',
  //   outputFile: 'gas-report.txt',
  //   noColors: true,
  //   coinmarketcap: COINMARKETCAP_API_KEY,
  // },
};
