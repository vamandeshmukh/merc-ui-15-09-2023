// Generics in TS 
// Generic Classes 
// class Employee {
//     private info: number;
//     constructor(info: number) {
//         this.info = info;
//     }
//     public getInfo(): number {
//         return this.info;
//     }
// }
// class Employee {
//     private info: any;
//     constructor(info: any) {
//         this.info = info;
//     }
//     public getInfo(): any {
//         return this.info;
//     }
// }
var Employee = /** @class */ (function () {
    function Employee(info) {
        this.info = info;
    }
    Employee.prototype.getInfo = function () {
        return this.info;
    };
    return Employee;
}());
var emp = new Employee('works in Hyderabad');
var emp2 = new Employee(90000);
console.log(emp.getInfo());
console.log(emp2.getInfo());
