// this type constructs a type consisting of the instance type of a constructor function in type.

class c {
    x=0;
    y=0;
}

type T00 = InstanceType<typeof c>;
//type t00 = c

type T10 = InstanceType<any>;
//type T10 = any

type T11 = InstanceType<never>;
//type T11 = never

type T12 = InstanceType<string>;
//type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.

type T13 = InstanceType<Function>;
//type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.