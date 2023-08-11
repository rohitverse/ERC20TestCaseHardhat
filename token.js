const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Test Token', async () => {
  let token;
  let signer1;
  let signer2;

  beforeEach(async () => {
    [signer1, signer2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory('Token');
    token = await Token.deploy();
  });

  it('Fetching name ', async () => {
    let name = await token.name();
    expect(name).to.be.equal('HardhatToken');
  });
  it('Transfer ', async () => {
    // console.log('Signer Address ', signer1);

    await token.mint();
    let name = await token.transfer(signer2.address, 50);
    console.log('Token Balance ', await token.balanceOf(signer2.address));

    expect(await token.balanceOf(signer1.address)).to.be.equal(950);
  });
});
