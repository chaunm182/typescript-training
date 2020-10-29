"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Shape_1 = require("./Shape");
var shape = new Shape_1.Shape(10, 15);
console.log(shape.getInfo());
var circle = new Circle_1.Circle(5, 10, 20);
console.log(circle.getInfo());
var rectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
console.log(rectangle.getInfo());
