const CryptoZombies = artifacts.require("StoreValue");
// const utils = require("./helpers/utils");
contract("StoreValue", () => {
    let contractInstance;
    beforeEach(async () => {
        contractInstance = await CryptoZombies.new();
    });
    it("should be able to create a new zombie", async () => {
        const result = await contractInstance.setNumber(1);
        return result;
    })
})
