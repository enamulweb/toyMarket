function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var randomNumber1 = generateRandomNumber(1,15);
  var randomNumber2 = generateRandomNumber(1,15);
  
  console.log("Random Number 1:", randomNumber1);
  console.log("Random Number 2:", randomNumber2);
  