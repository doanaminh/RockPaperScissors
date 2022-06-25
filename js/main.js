//defining player choices
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//playerChoice images
const playerImg  = document.querySelector('#playerImg');

//coputerChoice images
const computerImg = document.querySelector('#computerImg')

//results and reset definitions
const result = document.querySelector('.results')

//add event listeners
const userSelection = document.querySelectorAll('.userSelection');
userSelection.forEach(selection => {
  selection.addEventListener('click',makeReq)
})
// rock.addEventListener('click', showPlayerRock)
// paper.addEventListener('click', showPlayerPaper)
// scissors.addEventListener('click', showPlayerScissors)

//Show Player Selection
// function showPlayerRock(){
//   playerPaper.classList.add('hidden')
//   playerScissors.classList.add('hidden')

//   if (playerRock.classList.contains('hidden')) {
//     playerRock.classList.toggle('hidden')
//   }
// }



//show computer Selection
function showComputerRock(){
  computerImg.src = `${data.img}`;
  
}


// WIN CONDITIONS 
function winner(player, computer) {
  if(player === computer){
      result.textContent = 'Tie'
  } else if (player === 'rock') {
      if(computer === 'paper'){
          result.textContent = 'COMPUTER WINS!';
      } else {
          result.textContent = 'YOU WIN!';
      }
  } else if (player === 'scissors') {
      if(computer === 'rock'){
          result.textContent = 'COMPUTER WINS!';
      } else {
          result.textContent = 'YOU WIN!';
      }
  } else if (player === 'paper') {
      if(computer === 'scissors'){
          result.textContent = 'COMPUTER WINS!';
      } else {
          result.textContent = 'YOU WIN!';
      }
  }

//   document.querySelector('#playerChoice').textContent = player;
//   document.querySelector('#computerChoice').textContent = computer;
}

async function makeReq(event){
  let player = '';
  const res = await fetch(`/api?student=leon`)
  const data = await res.json()
  const { target } = event

  if (target.classList.contains('rock')) {
      player = 'rock';
      playerImg.src = `/images/rock.png`;
  } else if (target.classList.contains('paper')) {
      player = 'paper';
      playerImg.src = `/images/paper.png`;
  } else if (target.classList.contains('scissors')) {
      player = 'scissors';
      playerImg.src = `/images/scissors.png`;
  }

  const computer = data.result
  computerImg.src = `${data.img}`;
  
  winner(player,computer)
}