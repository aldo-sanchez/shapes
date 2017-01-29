var Shape = require('./shape.js');

function Triangle(side1, side2, side3){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
};

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.tFunction = function(){
  console.log('im a triangle function');
};

module.exports = Triangle;