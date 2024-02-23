// typescript uses structural typing to determine type compatibility. This means that two types are considered compatible if they have the same structure, regardless of their names.

interface point{
    x: number;
    y: number;
}

let p1: point = {x:10, y:20};
let p2: {x: number; y:number}=p1;

console.log(p2.x);