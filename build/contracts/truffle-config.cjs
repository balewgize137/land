module.exports = {
  contracts_directory: "./blockchain/contracts",
  contracts_build_directory: "./blockchain/build",
  migrations_directory: "./blockchain/migrations",
  test_directory: "./blockchain/test",
  
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  }
};