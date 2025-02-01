//1. Deposit some money - Checked!
//2. Determine number of lines to bet on
//3. Collect a bet amount
//4. Spin the slot machine
//5. Check if the user won
//7. Give the user their winnings
//8. Play again

const prompt = require("prompt-sync")();
while (true){

const deposit = () => {
  const depositAmount = prompt("Enter a deposit amount: ");
  const numberDepositAmount = parseFloat(depositAmount);

  if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
    console.log("Invalid deposit amount, try again");
  } else {
    return numberDepositAmount;
  }
}
};

deposit();
