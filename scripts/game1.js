const gameAddr = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
const contractName = "Game1";

async function main() {
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    const tx = await game.win();
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
