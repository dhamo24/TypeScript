// class constructors are very similar to functions you can add parameters with type annotations default values and overloads

class point{
    x: number;
    y: number;

    constructor(x=0, y=0){
        this.x = x;
        this.y = y;
    }
}