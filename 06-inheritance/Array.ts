import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import {Shape} from './Shape';

let shape = new Shape(10,15);
let circle = new Circle(5,10,20);
let rectangle = new Rectangle(0,0,3,7);

let array : Shape[] = [];
array.push(shape);
array.push(circle);
array.push(rectangle);

for(let shape of array){
    console.log(shape.getInfo());
}