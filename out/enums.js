"use strict";
//enum is group of constant
var Direction;
(function (Direction) {
    Direction[Direction["East"] = 0] = "East";
    Direction[Direction["West"] = 1] = "West";
    Direction[Direction["North"] = 2] = "North";
    Direction[Direction["South"] = 3] = "South";
})(Direction || (Direction = {}));
console.log(Direction.North);
var statuscode;
(function (statuscode) {
    statuscode[statuscode["Success"] = 200] = "Success";
    statuscode[statuscode["Unauthorized"] = 401] = "Unauthorized";
    statuscode[statuscode["ServweError"] = 500] = "ServweError";
})(statuscode || (statuscode = {}));
console.log(statuscode.Success);
//string
var Direction1;
(function (Direction1) {
    Direction1["East"] = "East";
    Direction1["West"] = "West";
    Direction1["North"] = "North";
    Direction1["South"] = "South";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.West);
