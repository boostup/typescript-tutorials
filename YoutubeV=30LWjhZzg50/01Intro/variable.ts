let greetings: string = "Hello WOrld";
console.log(greetings);

// Type inference. Best practice to let TS infer the type when it is obvious


// number
let userId = 334455.3; // yes !
let userId2: number = 334455.3; // no, not needed !

// boolean
let isLoggedIn = false;

// any
let hero;

function getHero() {
    return "thor";
}

// NOT GOOD: here, hero is infered to be 'any'. 
// A string was expected, but imagine that getHero now returns a boolean...
// Better spefcify that hero is a string:
// let hero: string;
hero = getHero();



