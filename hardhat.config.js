require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();
require("hardhat-gas-reporter");
require("solidity-coverage");
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLY_RPC_URL = process.env.GOERLY_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const COINMARKET_API_KRY = process.env.COINMARKET_API_KRY;

module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: GOERLY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKET_API_KRY,
    token: "MATIC",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    users: {
      default: 1,
    },
  },
};
