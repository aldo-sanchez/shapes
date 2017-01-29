var Shape = require('./shape.js');

function Square(side1, side2, side3, side4){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
};

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.sFunction = function(){
  console.log('im a square function');
};

module.exports = Square;