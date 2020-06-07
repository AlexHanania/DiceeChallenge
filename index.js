var randomNumber1;
var randomNumber2;

rollDice1();
changeDice1(randomNumber1);

rollDice2();
changeDice2(randomNumber2);

announceWinner(randomNumber1, randomNumber2);



function roll() {
  rollDice1();
  rollDice2();
  changeDice1();
  changeDice2();
}


function rollDice1() {
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
}

function rollDice2() {
  randomNumber2 = Math.floor(Math.random() * 6) + 1;

}

function changeDice1(randomNumber1) {

  if (randomNumber1 == 1) {

    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice1.png");

  } else if (randomNumber1 == 2) {

    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice2.png");

  } else if (randomNumber1 == 3) {

    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice3.png");

  } else if (randomNumber1 == 4) {

    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice4.png");

  } else if (randomNumber1 == 5) {

    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice5.png");

  } else if (randomNumber1 == 6) {

    document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice6.png");

  }
}


function changeDice2(randomNumber2) {

  if (randomNumber2 == 1) {

    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice1.png");

  } else if (randomNumber2 == 2) {

    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice2.png");

  } else if (randomNumber2 == 3) {

    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice3.png");

  } else if (randomNumber2 == 4) {

    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice4.png");

  } else if (randomNumber2 == 5) {

    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice5.png");

  } else if (randomNumber2 == 6) {

    document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice6.png");

  }
}

function announceWinner(randomNumber1, randomNumber2) {

  if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").textContent = ("The Winner is Player 1");

  } else if (randomNumber1 < randomNumber2) {

    document.querySelector("h1").textContent = ("The Winner is Player 2");

  } else {

    document.querySelector("h1").textContent = ("DRAW! Try Again!");
  }
}
