interface Employee{
    readonly name: string;
    employeeId: number;
    getNme(): string

}

class Fresher implements Employee{
    name ='dhamo';
    employeeId: number = 1;
    getNme(): string {
        return this.name;
    }

}
const employee:Employee = new Fresher();
console.log(employee);
console.log(employee.getNme( ));
