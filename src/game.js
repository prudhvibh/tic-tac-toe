// const Player = require('./player.js');

const Game = function(){
  this.players = [];
  player1 = new Player('X');
  player2 = new Player('O');
  this.players.push(player1);
  this.players.push(player2);
  this.currentPlayerIndex = 0;
  this.allMoves = [];
}

Game.prototype = {
  updatePlayer: function(){
    this.currentPlayerIndex = 1 - this.currentPlayerIndex;
    return this.currentPlayerIndex;
  },

  getCurrentPlayer : function(){
    return this.players[this.currentPlayerIndex];
  },

  makeMove : function(position) {
    let currentPlayer = this.getCurrentPlayer();
    this.allMoves.push(position);
    currentPlayer.addMove(position);
    this.updatePlayer();
  },

  isGameDraw : function() {
    return this.allMoves.length == 9;
  },

  isValidMove : function(position) {
    return !this.allMoves.includes(position);
  }
};

// module.exports = Game;
