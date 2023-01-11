// add the game address here and update the contract name if necessary
const gameAddr = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const contractName = "Game4";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);
    // do whatever you need to do to win the game here:
    
    // The idea is to have overflow...
    const tx = await game.win(56);
    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
