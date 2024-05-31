const Migrations = artifacts.require("zombieownership");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
};
