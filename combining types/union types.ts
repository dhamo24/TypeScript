// union types in typescript allow you to specify multiple possible type for a single variable or parameter. A union type is written as a vertical bar | separated list of types.


function print(id: number| string){
    console.log("your ID is: "+id);
}

print(101);

print("455");
