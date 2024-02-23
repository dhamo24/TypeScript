"use strict";
class Fresher {
    constructor() {
        this.name = 'dhamo';
        this.employeeId = 1;
    }
    getNme() {
        return this.name;
    }
}
const employee = new Fresher();
console.log(employee);
console.log(employee.getNme());
