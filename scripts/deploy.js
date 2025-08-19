const hre = require("hardhat");

async function main() {
  const MyToken = await hre.ethers.getContractFactory("MyToken");

  // Deploy with initial supply (example: 1,000,000 tokens)
  const token = await MyToken.deploy(1000000);

  // Wait until the contract is actually deployed
  await token.waitForDeployment();

  console.log("MyToken deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
