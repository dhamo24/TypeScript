//typescript provides the concept of function overloading.
//you can have multiple functions
//1. with the same function name
//2.but different parameter types and retrun type.
//3. however, the number of parameters should be the same.

//provide the implementation/protype of the function:

function sam(a: string, b:string): string;
function sam(a: number, b:number): number;
function sam(a: boolean, b:boolean): boolean;

//need to implement with function body this only once:
function sam(a:any, b:any): any{
    return a+b;
}

let s1 = sam('hello' ,'world');
let s2 = sam(10,30);
let s3 = sam(true,false);


console.log(s1);
console.log(s2);
console.log(s3);


