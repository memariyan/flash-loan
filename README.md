# Flash Loan Project

Try running some of the following tasks:

```shell
npx hardhat
npm i @aave/core-v3 dotenv
npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0" 
npx hardhat compile
npx hardhat run --network sepolia scripts/deploy.js 
```

Contract Addresses :
```shell
Dex: 0x7362c108Bf6a7C2e0813F2fBa67Db12b5f3F3575
FlashLoan : 0xBCFF92488E7cfeD8cC06b63710a241Ee51917aCE
FlashLoanArbitrage: 0xA5FE2bFce38e4BC314Abf1a41325C3F22109C022
```

Token addresses in Aave :
```shell
USDC : 0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8
DAI : 0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357
```



For ERC-20 tokens, there are three important smart contract functions involved in token approvals:

The ‘approve’ function, which is what allows a smart contract address to spend a user’s tokens
The ‘allowance’ function, which states how many tokens the user has approved the smart contract to spend
The ‘transferFrom’ function, which is how the contract spends the tokens 
