// Type vs Interface
// in type script  both types and interfaces can be used to define the structure of objects and enforce type checks . howerver there are some differences between the two.
//Types are used to create a new named type based on an existing type or to combine existing types into a new type .they can be created using the type keyword 

type person ={
    name: string;
    age: number;
}

const Person:person = {
    name: 'dhamo',
    age: 24
}