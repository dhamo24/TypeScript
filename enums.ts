//enum is group of constant

enum Direction{
    East,
    West,
    North,
    South,
}

console.log(Direction.North);


enum statuscode{
    Success = 200,
    Unauthorized = 401,
    ServweError = 500
}

console.log(statuscode.Success)

//string

enum Direction1{
    East = 'East',
    West = 'West',
    North = 'North',
    South = 'South',
}

console.log(Direction1.West);
