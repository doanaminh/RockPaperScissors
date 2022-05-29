//defining user choices
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerChoiceImg = document.querySelector('#playerChoiceImg');
const computerChoiceImg = document.querySelector('#computerChoiceImg');
const userSelection = document.querySelectorAll('.userSelection');
const result = document.querySelector('.results')
const reset = document.querySelector('.reset')

//add event listeners
userSelection.forEach(selection => {
  selection.addEventListener('click',makeReq)
})

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
  winner(player,computer)
}