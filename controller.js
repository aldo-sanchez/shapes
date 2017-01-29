var Shape = require('./shape.js');
var Triangle = require('./triangle.js');
var Square = require('./square.js');
var Pentagon = require('./pentagon.js')

var shape1 = new Shape('test');
var triangle1 = new Triangle(1);
var square1 = new Square(2);
var pentagon1 = new Pentagon(5);

var shapesArray = [shape1, triangle1, square1, pentagon1];
var constructorsArray = [Triangle, Square, Pentagon];

for(i = 0; i < shapesArray.length; i++){
  console.log(shapesArray[i]);
  console.log(shapesArray[i].get_type());
  console.log('instanceof Shape', shapesArray[i] instanceof Shape);
  console.log('instanceof Triangle', shapesArray[i] instanceof Triangle);
  console.log('instanceof Square', shapesArray[i] instanceof Square);
  console.log('instanceof Pentagon', shapesArray[i] instanceof Pentagon);
  console.log('\n');
}