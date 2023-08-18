/*
function addTwo(num) {
    num.toUpperCase()
    return num + 2
}
addTwo("5");
*/

// Solving issues on previous function
function addTwo(num: number) {
    return num + 2
}
addTwo(5);

/*
function getUpper(val){
    return val.toUpperCase()
}
getUpper(4)
*/

//Solving issue
function getUpper(val: string) {
    return val.toUpperCase()
}
getUpper(4)

// function signUpUser(name, email, password) { }
// signUpUser(1, 2, 3)

function signUpUser(name: string, email: string, isPaid: boolean) { }
signUpUser("Fred", "Bea", 3)

// define a default value for isPaid
let loginUser = (name: string, email: string, isPaid: boolean = false) => { }
loginUser("Fred", "Bea");

// define the function return type
function addThree(num: number): number {
    return "hello"; //this is a problem we can solve with TS
}

// return type of function `never`: useful 
// for a crash or an explicit `onError` or `fail` function
// which should 
// 1) never return a value
// 2) stop execution of program

