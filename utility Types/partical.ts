//Make all properties of a type optional. This is useful when you need to create an object with only a subset of the properties of an existing type.

interface Customer{
    name: string;
    age:number;
    email: string;
}

function createCustomer(customer: Partial<Customer>):Customer{
    return{
        name: 'dhamo',
        age: 30,
        email:'dhamo@gmail.com',
        ...customer,
    };
}

const newCustomer = createCustomer({name:'tharun'});

console.log(newCustomer);