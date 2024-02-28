//  Record costructs an object type whose property keys are kes and whose property values are type. this utility can be used to map the properties of a type to another type

interface DogInfo{
    age: number;
    breed: string;
}
type DogName = 'charlie' | 'jack' | 'max';

const Dogs: Record<DogName, DogInfo> = {
    charlie: {age: 5, breed:'lab'},
    jack: {age:3, breed:'french Bulldog'},
    max: {age:8, breed:'golden Retriever'}
};