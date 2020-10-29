"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var circle = new Circle_1.Circle(5, 10, 20);
var rectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
var array = [];
array.push(circle);
array.push(rectangle);
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var shape = array_1[_i];
    console.log(shape.getInfo());
    console.log("Area = " + shape.calcArea());
}
