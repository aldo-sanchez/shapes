var Shape = require('./shape.js');

function Square(size){
  this.size = size;
  this.numSides = 4;
};

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.sFunction = function(){
  console.log('im a square function');
};

module.exports = Square;