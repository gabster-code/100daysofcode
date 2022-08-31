require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
require("hardhat-gas-reporter");
const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/eH_13vCck5w2QthyH304EV6AxXqxKpeu",
      accounts:["c3a66bbec11134e7764c81e3befe076edfc40cca64f95264fa401ff808291ff1"]  ,
    },
  },gasReporter: {
   
    enabled: true !== undefined,
    currency: "USD",
    noColors: true,
    coinmarketcap: "7fc48f48-b24b-434f-938c-33ffb4a45564" || "",
    token: "ETH"
  }
};