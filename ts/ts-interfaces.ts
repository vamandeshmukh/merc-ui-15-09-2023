
// interface for class 

interface Rbi {

    bankAddress: string;

    payInterest(): void;

}

class CitiBank implements Rbi {

    bankAddress: string;
    phone: number;

    constructor() { };

    payInterest(): void {
        console.log('Interest in deposits is being paid.')
    }

    chargeInterest(): void {
        console.log('interest is being charged for loans.')
    }
}


// interface for an object 

// 1. use interface or 
// interface User {
//     name: string;
// }

// 2. use type 
type User = {
    name: string;
}

const user: User = {
    name: 'Hari'
};

// const user: User = {
//     firstName: 'Hari'
// };

// const user = {
//     name: 'Hari'
// };

// const user = {
//     fristName: 'Hari'
// };

function greet(user: User) {
    console.log('Hello ' + user.name);
}

greet(user);