function Shape(type){
  this.type = type;
};

Shape.prototype.get_type = function(){
  return this.constructor;
};

module.exports = Shape;