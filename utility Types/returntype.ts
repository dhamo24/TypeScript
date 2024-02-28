//Retrun type constructs a type consisting of the retrun type of the function type
type T0 = ReturnType<() => string>;
//typeT0 = string

type T01 = ReturnType<(s: string) => void>;
//type T01 = void

type T02 = ReturnType<<T>() => T>;
//type T02 = unknown

type T03 = ReturnType<<T extends u, u extends number[]>() => T>;
// type T03 = number[]

declare function f1(): { a:number; b: string};
type T04 = ReturnType<typeof f1>;
//type T04 = {
    //a: number;
    //b: string;
//}

type T05 = ReturnType<any>;
//type T05 = any

type T06 = ReturnType<never>;
//type T06 = never