const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token Contract', async () => {
  let token;
  let signer1;
  let signer2;
  beforeEach(async () => {
    [signer1, signer2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory('Token');
    token = await Token.deploy();
    // console.log('Contract Deployed : ', token);
  });

  it('Fetching Name ', async () => {
    let name = await token.name();
    expect(name).to.be.equal('RohitSah');
  });
  it('Fetching Symbol ', async () => {
    let symbol = await token.symbol();
    // console.log(s)
    expect(symbol).to.be.equal('RHT');
  });
  it('Fetching TotalSupply ', async () => {
    let totalSupply = await token.totalSupply();
    expect(totalSupply).to.be.equal(1000);
  });
  describe('Transfer Token ', async () => {
    it('Transfer Token between Accounts', async () => {
      console.log(
        'Balance Of Address 1',
        await token.balanceOf(signer1.address)
      );
      console.log(
        'Balance Of Address 2',
        await token.balanceOf(signer2.address)
      );
      let amount = await token.transfer(signer2.address, 50);
      expect(await token.balanceOf(signer1.address)).to.be.equal(950);
      console.log(
        'Balance Of Address 1',
        await token.balanceOf(signer1.address)
      );
      console.log(
        'Balance Of Address 2',
        await token.balanceOf(signer2.address)
      );
    });
  });
});
