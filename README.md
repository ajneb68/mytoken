# MyToken - Core Blockchain Deployment

This project demonstrates deploying a simple ERC-20 token contract to the **Core Testnet** using **Hardhat**.  

---

## 📌 Project Structure
- **contracts/** → Contains the Solidity smart contract(s).  
- **scripts/** → Deployment scripts.  
- **hardhat.config.js** → Hardhat configuration file.  
- **.env** → Stores private key and RPC URL securely.  

---

## 🚀 Deployment Information
- **Deployed Wallet Address:** `0x51492498839214a3AdEEfF87cCE6Ed663b04Cf73`  
- **Network:** Core Testnet  

---

## ⚡ Requirements
- Node.js (>= 16.x)  
- Hardhat  
- dotenv  

Install dependencies:
```bash
npm install
```

---

## 🔑 Environment Setup
Create a `.env` file in the project root:
```env
PRIVATE_KEY=your_private_key_here
CORE_TESTNET_RPC=https://rpc.test.btcs.network
```

---

## 📜 Deployment Script
`scripts/deploy.js`
```javascript
const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("MyToken");
  const token = await Token.deploy();
  await token.waitForDeployment();
  console.log("MyToken deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

---

## ▶️ Run Deployment
```bash
npx hardhat run scripts/deploy.js --network coretestnet
```

---

## ✅ Verify Contract (Optional)
Once deployed, you can verify the contract:
```bash
npx hardhat verify --network coretestnet <contract_address>
```

---

## 📂 Resources
- [Core Blockchain Docs](https://coredao.org/)  
- [Hardhat Docs](https://hardhat.org/)  
