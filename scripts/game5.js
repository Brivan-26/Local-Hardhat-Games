const gameAddr = "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e";
const contractName = "Game5";

async function main() {
    const game = await hre.ethers.getContractAt(contractName, gameAddr);
    const giveAllowance = await game.giveMeAllowance(10000)
    await giveAllowance.wait()

    const mint = await game.mint(10000)
    await mint.wait()


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
