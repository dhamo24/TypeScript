// The keyof operator in typescript is used to get the union of keys from an object type. 

interface Canditate {
    name : string;
    age: number;
    location : string;

}

type CanditateKeys = keyof Canditate;
const key: CanditateKeys = 'name';