const hre = require("hardhat");

async function deploy() {
    const aavePoolAddressProvider = "0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A"; //see https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses
    const FlashLoanArbitrage = await hre.ethers.getContractFactory('FlashLoanArbitrage');
    const flashLoanArbitrage = await FlashLoanArbitrage.deploy(aavePoolAddressProvider);
    await flashLoanArbitrage.deployed();

    console.log("contract deployed with address : ", flashLoanArbitrage.address);
}

deploy()
    .then( () => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });