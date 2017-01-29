var Shape = require('./shape.js');

function Pentagon(size){
  this.size = size;
  this.numSides = 5;
};

Pentagon.prototype = Object.create(Shape.prototype);
Pentagon.prototype.constructor = Pentagon;

module.exports = Pentagon;