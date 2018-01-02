let game = new Game();

const restart = function() {
  location.reload();
}

const stopGame = function() {
  document.getElementById('gameField').onclick = null;
  document.getElementById('restart').onclick = restart;
}

const display = function(id,text) {
  document.getElementById(id).innerText = text;
}

const checkStatus = function(player) {
  if(player.isWon()){
    display('result',`${player.symbol} won the game!`);
    stopGame();
  } else if(game.isGameDraw()){
    display('result','Game is draw');
    stopGame();
  }
}

const updatePosition = function(position) {
  let player = game.getCurrentPlayer();
  display(position,player.symbol);
  game.makeMove(position);
  checkStatus(player);
  player = game.getCurrentPlayer();
  display('turn',player.symbol+"'s turn");
}

const selectPosition = function(event) {
  let position = +event.target.id;
  if(!game.isValidMove(position)){
    return;
  }
  updatePosition(position);
}

const startGame = function() {
  let player = game.getCurrentPlayer();
  display('turn',player.symbol+"'s turn");
  document.getElementById('gameField').onclick = selectPosition;
}

window.onload = startGame;
