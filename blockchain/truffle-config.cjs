const path = require('path');

module.exports = {
  contracts_build_directory: path.join(__dirname, "build"),
  contracts_directory: path.join(__dirname, "contracts"), 
  migrations_directory: path.join(__dirname, "migrations"),
  
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
      from: "0xd48b7395025d1414793F93Fa8f41626C327D564E"
    }
  },
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};