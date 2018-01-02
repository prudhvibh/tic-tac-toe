const Player = require('../src/player.js');
const Game = require('../src/game.js');
const assert = require('chai').assert;

describe('gameModel',function(){
  describe('Game',function(){
    it('should return true if the value is instance of Game constructor',function(){
      let game = new Game();
      assert.instanceOf(game,Game);
    })

    it('should return true if the players list length equal to 2',function(){
      let game = new Game();
      assert.deepEqual(game.players.length,2);
    })

    it('At starting current player index is equal to 0',function(){
      let game = new Game();
      assert.equal(game.currentPlayerIndex,0);
    })

    it('player1 and player2 are the instances of Player constructor',function(){
      let game = new Game();
      assert.instanceOf(player1,Player);
      assert.instanceOf(player2,Player);
    })
  })

  describe('updatePlayer',function(){
    it('should update the player after every move',function(){
      let game = new Game();
      assert.equal(game.currentPlayerIndex,0);
    })
  })

  describe('getCurrentPlayer',function(){
    it('returns the current player index',function(){
      let game = new Game();
      assert.deepEqual(game.getCurrentPlayer(),player1);
    })
  })

  describe('makeMove',function(){
    it('makes a move of current player and updates the current player',function(){
      let game = new Game();
      game.makeMove(1);
      assert.deepEqual(game.currentPlayerIndex,1);
      assert.deepEqual(game.allMoves,[1])
      game.makeMove(2);
      assert.deepEqual(game.currentPlayerIndex,0);
      assert.deepEqual(game.allMoves,[1,2])
    })
  })

  describe('isGameDraw',function(){
    it('should return true if the length of all moves is equal to 9',function(){
      let game = new Game();
      game.makeMove(1);
      game.makeMove(2);
      game.makeMove(3);
      game.makeMove(4);
      game.makeMove(5);
      game.makeMove(6);
      game.makeMove(7);
      game.makeMove(8);
      game.makeMove(9);
      assert.isOk(game.isGameDraw());
    })
  })

  describe('isValidMove',function(){
    it('should return false if the move is valid',function(){
      let game = new Game();
      assert.isOk(game.isValidMove(1));
      game.makeMove(1);
      assert.isNotOk(game.isValidMove(1));
    })
  })
})
