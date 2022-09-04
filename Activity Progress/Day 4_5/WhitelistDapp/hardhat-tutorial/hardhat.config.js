require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
require("hardhat-gas-reporter");
const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/k_-B3ET7LJbOQHuyCQ3hccSrzaSISPQX",
      accounts:["babc6c0e0f4958cb53da66b75bf44f58d51ba95c46a876521ef64e80caf3a5f3"]  ,
    },
  },gasReporter: {
   
    enabled: true !== undefined,
    currency: "USD",
    noColors: true,
    coinmarketcap: "7fc48f48-b24b-434f-938c-33ffb4a45564" || "",
    token: "ETH"
  }
};