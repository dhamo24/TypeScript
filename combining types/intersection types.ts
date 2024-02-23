//An intersection type creates a new type by combining multiple existing types. the new types has all features of the existing types.

interface BusinessPartner{
    name: string;
    credit : number;
}
interface Identity{
    id : number;
    name: string;

}

interface Contect{
    email : string;
    phone: number;
}

type Custamer = Identity & Contect;
let e:Custamer = {
    id: 10,
    name : 'dhamo',
    email : 'dhamo@gmail.com',
    phone : 123654987
};