// interface for class 
var CitiBank = /** @class */ (function () {
    function CitiBank() {
    }
    ;
    CitiBank.prototype.payInterest = function () {
        console.log('Interest in deposits is being paid.');
    };
    CitiBank.prototype.chargeInterest = function () {
        console.log('interest is being charged for loans.');
    };
    return CitiBank;
}());
var user = {
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
function greet(user) {
    console.log('Hello ' + user.name);
}
greet(user);
