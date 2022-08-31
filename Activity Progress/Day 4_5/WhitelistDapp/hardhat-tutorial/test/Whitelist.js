
const { ethers } = require("hardhat");

describe("WhitelistContract", function () {
  it("Should mint an NFT", async function () {
    const NFT = await ethers.getContractFactory("Whitelist");
    const nft = await NFT.deploy(10);
    await nft.deployed();

    const [_, minter] = await ethers.getSigners()

    await nft.connect(minter).addAddressTowhitelist()

    
  });
});