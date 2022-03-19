"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// function for displaying message! usage ke time call this function and just pass the argument in parameter.
const diplayMessage = (message) =>
  (document.querySelector(`.message`).textContent = message);

//when you click on check button this function happens
document.querySelector(`.check`).addEventListener(`click`, function ()
{
  const guess = Number(document.querySelector(`.guess`).value);

  // console.log(guess, typeof guess);

  // when there is no output
  if (!guess)
  {
    // document.querySelector(`.message`).textContent = `🛑 No Number`;

    diplayMessage(`🛑 No Number`);
  }

  // when the guess is correct and player wins!
  else if (guess === secretNumber)
  {
    // document.querySelector(`.message`).textContent = `🎉 Correct Guess!`;

    diplayMessage(`🎉 Correct Guess!`);

    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore)
    {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  }

  //when the guess is wrong or different from secret number!
  else if (guess !== secretNumber)
  {
    //if the score is above 1 then do this
    if (score > 1)
    {

      diplayMessage(guess > secretNumber ? `📈 Too high` : `📉 Too low`);

      score--;
      document.querySelector(`.score`).textContent = score;
    }
    // if score is less than one, we will simply lose the game
    else
    {
      document.querySelector(`.message`).textContent = `😢 You lost!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }

});

document.querySelector(`.again`).addEventListener(`click`, function ()
{
  //For Header Reset
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = `15rem`;

  //For Left reset, value will do the work

  document.querySelector(`.guess`).value = "";

  //For Right Reset
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  diplayMessage(`Start Guessing...`);

  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.highscore`).value = 0;
});
