//conditional types in typescript are a way to select a type based on a condition. they allow you to write a type that dynamically chooses a type based on the types of its inputs . conditional types are declared using a combination of the infer keyword and a type the tests a conditio and selects a type based on the result of the test

type Extends<T,U> = T extends U ? T : U;

type A = Extends<string,any>;//type a is 'string
type B = Extends<any,string>;//type B is 'string'.