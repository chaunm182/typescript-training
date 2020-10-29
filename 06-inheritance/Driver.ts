import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import {Shape} from './Shape';

let shape = new Shape(10,15);
console.log(shape.getInfo());

let circle = new Circle(5,10,20);
console.log(circle.getInfo());

let rectangle = new Rectangle(0,0,3,7);
console.log(rectangle.getInfo());