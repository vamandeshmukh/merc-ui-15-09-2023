
// Decorators in TS - metadata to code 

const logClassName = (constructor: Function) => {
    console.log(`Class name: ${constructor.name}`);
};

const logMethodName = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log(`Method name: ${propertyKey}`);
};

const propertyDecorator = (target: any, propertyKey: string) => {
    console.log(propertyKey);
};

@logClassName
class Employee {

    @propertyDecorator
    firstName: string;

    constructor() { }
    // code 

    @logMethodName
    getWorkDone = () => {
        console.log('getWorkDone method invoked.');
    };
}

const emp = new Employee();
emp.getWorkDone();


