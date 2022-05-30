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
  computerImg.src = `http://localhost:8000/images/${data.img}.png`;
  
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
      player = 'rock';
      playerImg.src = `http://localhost:8000/images/rock.png`;
  } else if (target.classList.contains('paper')) {
      player = 'paper';
      playerImg.src = `http://localhost:8000/images/paper.png`;
  } else if (target.classList.contains('scissors')) {
      player = 'scissors';
      playerImg.src = `http://localhost:8000/images/scissors.png`;
  }

  const computer = data.result
  computerImg.src = `http://localhost:8000${data.img}`;
  
  winner(player,computer)
}