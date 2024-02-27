//in typescript a hybrid is a type that combines multiple types into a single type . the resulting type is considerd a union of those types . this allows you to specify that a value can have multiple types ,rather than just one.

type Details = string | number;


type Education = {
    degree : string;
    school : string;
    year : number;
}

type user = {
    name : string;
    age : number;
    email : string;
    education : Education;
}