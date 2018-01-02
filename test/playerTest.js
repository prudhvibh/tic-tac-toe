const Player = require('../src/Player.js');
const assert = require('chai').assert;

describe('playerModel',function(){
  describe('Player',function(){
    it('should return true if the value is instance of constructor',function(){
      let newPlayer = new Player('X');
      assert.instanceOf(newPlayer,Player);
    })
  })

  describe('addMove',function(){
    it('should return true if the move is puhsed to this.moves',function(){
      let player = new Player('X');
      player.addMove(1);
      assert.deepEqual(player.moves,[1]);
    })
  })

  describe('getMoves',function(){
    it('should return true if it gave all the moves',function(){
      let player = new Player('O');
      player.addMove(1);
      player.addMove(3);
      assert.deepEqual(player.getMoves(),[1,3]);
    })
  })

  describe('isWon',function(){
    it('should return true if the moves made by player is subset to any of winningCombinations',function(){
      let player = new Player('O');
      player.addMove(1);
      player.addMove(3);
      player.addMove(4);
      player.addMove(2);
      assert.isOk(player.isWon());
    })
  })
})
