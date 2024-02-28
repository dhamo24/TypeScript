//Template literal types in typescript are a way to manipulate string values as types . they allow you to create a type based on theresult of string manipulation . template literal types are created using the  backtick(") character and string manipulation expressions within the type 


type Name = `Mr.${string}`;

let name: Name = `Mr.Smith`;
let name: Name = `Mrs.smith`;