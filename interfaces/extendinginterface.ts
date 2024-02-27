//Extanding interfaces
//extends keywords
//one interface can extend multiple interfaces

interface Iperson{
    fullName: string;
    phoneNumber: number;
    date_of_birth: Date;
    age: number;
    email: string;
    address: string;
}

interface Isalary{
    salary: number;
    from_date: Date;
    to_date: Date;
}

interface IEmployee extends Iperson,Isalary{
    emp_ID: number;
    role: string;
    department: string;
    workingStatus: 'active' | 'inactive';
}

const Employee : IEmployee = {
    emp_ID: 1234,
    role: 'forntend developer',
    department: 'IT',
    workingStatus: 'active',
    fullName: 'dhamo',
    phoneNumber: 9874561253,
    age: 24,
    date_of_birth: new Date('03/23/2000'),
    email: 'abc@gmail.com',
    address: 'no:301 karai main road',
    salary: 10000,
    from_date: new Date('05/08/2023'),
    to_date: new Date('06/08/2023')



}