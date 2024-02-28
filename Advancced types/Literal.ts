//literal types in typescript are a way to specify a value exactly , rather than just a type .literal types can be used to enforce that a value must be of a specific type and a specific value . literal types are created by using a literal value , such as a string , number , or boolean, as a type

type Age =42;

let age: Age = 42;//ok
let age: Age = 43;//error