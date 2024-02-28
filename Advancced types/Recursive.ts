//its a way to define a type that references itself. Recursive types are used to define complex data structures such as trees or linked lists, where a value can contain one or more values of the same type 

type Linkedlist<T> = {
    value: T;
    next: Linkedlist<T> | null;
};

let list: Linkedlist<number> ={
    value: 1,
    next: { value:2, next:{value:3, next: null}},
};