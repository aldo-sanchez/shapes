var Shape = require('./shape.js');

function Pentagon(size){
  this.size = size;
  this.numSides = 5;
};

Pentagon.prototype = Object.create(Shape.prototype);
Pentagon.prototype.constructor = Pentagon;

Pentagon.prototype.pFunction = function(){
  console.log('im a pentagon');
};

module.exports = Pentagon;