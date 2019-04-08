let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice(){
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, computer){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${user} ${smallUserWord} beats ${computer} ${smallCompWord} You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(user, computer){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${user} ${smallUserWord} loses to ${computer} ${smallCompWord} You lost...`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(user, computer){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${user} ${smallUserWord} ${computer} ${smallCompWord} It's a Draw.`;
  userChoice_div.classList.add('grey-glow');
  setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}

function game(userChoice){
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsPaper":
      lose(userChoice, computerChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main(){
  rock_div.addEventListener('click', () => game("Rock"));
  paper_div.addEventListener('click', () => game("Paper"));
  scissors_div.addEventListener('click', () => game("Scissors"));
}
main();
