//defining player choices
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//playerChoice images
const playerRock  = document.querySelector('#playerRock');
const playerPaper = document.querySelector('#playerPaper');
const playerScissors = document.querySelector('#playerScisors')

//coputerChoice images
const computerRock = document.querySelector('#computerRock')
const computerPaper = document.querySelector('#computerPaper')
const computerScissors = document.querySelector('#computerScissors')

//results and reset definitions
const result = document.querySelector('.results')
const reset = document.querySelector('.reset')

//add event listeners
const userSelection = document.querySelectorAll('.userSelection');
userSelection.forEach(selection => {
  selection.addEventListener('click',makeReq)
})
rock.addEventListener('click', showPlayerRock)
paper.addEventListener('click', showPlayerPaper)
scissors.addEventListener('click', showPlayerScissors)

//Show Player Selection
function showPlayerRock(){
  playerPaper.classList.add('hidden')
  playerScissors.classList.add('hidden')

  if (playerRock.classList.contains('hidden')) {
    playerRock.classList.toggle('hidden')
  }
}

function showPlayerPaper(){
  playerScissors.classList.add('hidden')
  playerRock.classList.add('hidden')

  if (playerPaper.classList.contains('hidden')) {
    playerPaper.classList.toggle('hidden')
  }
}

function showPlayerScissors(){
  playerRock.classList.add('hidden')
  playerPaper.classList.add('hidden')

  if (playerScissors.classList.contains('hidden')) {
    playerScissors.classList.toggle('hidden')
  }
}

//show computer Selection
function showComputerRock(){
  computerPaper.classList.add('hidden')
  computerScissors.classList.add('hidden')

  if (computerRock.classList.contains('hidden')){
    computerRock.classList.toggle('hidden')
  }
}

function showComputerPaper(){
  computerScissors.classList.add('hidden')
  computerRock.classList.add('hidden')

  if (computerPaper.classList.contains('hidden')){
    computerPaper.classList.toggle('hidden')
  }
}

function showComputerScissors(){
  computerRock.classList.add('hidden')
  computerPaper.classList.add('hidden')

  if (computerScissors.classList.contains('hidden')){
    computerScissors.classList.toggle('hidden')
  }
}

// WIN CONDITIONS 
function winner(player, computer) {
  if(player === computer){
      result.textContent = 'Tie'
  } else if (player === 'rock') {
      if(computer === 'paper'){
          result.textContent = 'Computer Wins!';
      } else {
          result.textContent = 'You Win!';
      }
  } else if (player === 'scissors') {
      if(computer === 'rock'){
          result.textContent = 'Computer Wins!';
      } else {
          result.textContent = 'You Win!';
      }
  } else if (player === 'paper') {
      if(computer === 'scissors'){
          result.textContent = 'Computer Wins!';
      } else {
          result.textContent = 'You Win!';
      }
  }

  document.querySelector('#playerChoice').textContent = player;
  document.querySelector('#computerChoice').textContent = computer;
}

async function makeReq(event){
  let player = '';
  const res = await fetch(`/api?student=leon`)
  const data = await res.json()
  const { target } = event

  if (target.classList.contains('rock')) {
      player = 'rock'
  } else if (target.classList.contains('paper')) {
      player = 'paper'
  } else if (target.classList.contains('scissors')) {
      player = 'scissors'
  }

  const computer = data.result
  if (data.result === 'rock') {
    showComputerRock()
  } else if (data.result === 'paper') {
    showComputerPaper()
  } else if (data.result === 'scissors') {
    showComputerScissors()
  }
  
  winner(player,computer)
}