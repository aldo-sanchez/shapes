var Shape = require('./shape.js');

function Triangle(size){
  this.size = size;
  this.numSides = 3;
};

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.tFunction = function(){
  console.log('im a triangle function');
};

module.exports = Triangle;