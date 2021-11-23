require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Ae9jaGPJpWoso0XLAgMWmRdpAsTeZIrr",
      accounts: ["rinkeby_private_key"],
    },
  },
  etherscan: {
    apiKey: "etherscan apikey",
  },
};
