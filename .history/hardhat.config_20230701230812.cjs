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
          privateKey: '0x...private-key-of-account-1',
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
