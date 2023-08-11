async function main() {
  const [deployer] = await ethers.getSigners();
  // const Token = await ethers.getContractFactory('Token');
  // const token = await Token.deploy();
  const token = await ethers.deployContract('Token');
  console.log('Token Address : ', token.address);
  console.log('Deployer Address : ', deployer.address);
}
main().then(() =>
  process.exit(0).catch((error) => {
    console.error(error);
    process.exit(1);
  })
);
