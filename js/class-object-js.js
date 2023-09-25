
// class and object in js

// Proper JS object

// const empData = {
//     eid: 101,
//     firstName: 'Sonu',
//     salary: 90000
// };

// console.log(empData.firstName);

class Employee {

    // fields 
    eid;
    firstName;
    salary;

    // constructor 
    constructor(eid, firstName, salary) {
        this.eid = eid;
        this.firstName = firstName;
        this.salary = salary;
    }

    // methods
    printFirstName = () => {
        console.log(this.firstName);
    };

}

// Java 
// Employee emp = new Employee();

// JS 
const emp = new Employee();
const emp2 = new Employee(101, 'Sonu', 90000);
console.log(emp);
console.log(emp2);
emp2.printFirstName();







