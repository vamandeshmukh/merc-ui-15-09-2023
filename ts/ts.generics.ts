
// Generics in TS 

// Generic Classes 

// class Employee {

//     private info: number | string;

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

class Employee<T> {

    private info: T;

    constructor(info: T) {
        this.info = info;
    }

    public getInfo(): T {
        return this.info;
    }
}

const emp = new Employee<string>('works in Hyderabad');
const emp2 = new Employee<number>(90000);

console.log(emp.getInfo());
console.log(emp2.getInfo());




