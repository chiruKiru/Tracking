require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    networks: {
      chainId: 1337,
    },
    hardhat: {
      accounts: [
        {
          privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
          balance: '10000000000000000000000', // 10,000 test Ether for account 1
        },
        {
          privateKey: '0x...private-key-of-account-2',
          balance: '10000000000000000000000', // 10,000 test Ether for account 2
        },
        // Add more test accounts as needed
      ],
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
      viaIR: true,
    },
  },
}
