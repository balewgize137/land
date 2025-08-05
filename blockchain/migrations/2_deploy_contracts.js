const LandRegistry = artifacts.require("LandRegistry");

module.exports = function(deployer) {
  // Deploy without constructor arguments
  deployer.deploy(LandRegistry);
  
  // If your contract needs constructor args:
  // deployer.deploy(LandRegistry, arg1, arg2, {...});
};