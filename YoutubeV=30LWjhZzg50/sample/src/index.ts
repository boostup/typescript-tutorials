// CLASSES
// ////////////////////////
class User {
    email: string
    name: string
    city: string = ""
    readonly someReadOnlyProp: boolean = true
    private somePrivateProp: number
    // alt syntax for private: 
    // #somePrivateProp: number // private
    constructor(email: string, name: string) {
        this.email = email;
        // this.name = name;
        this.somePrivateProp = 3;
    }
}

const fred = new User("fred@gmail.com", "fred")
fred.city = 2;
fred.someReadOnlyProp = false; // in TSConfig file, we could tell the 
// transpiler not to even include this line,
// since it is not allowed to assign a readonly
fred.somePrivateProp

// Shorter way to write User class

class User2 {
    constructor(
        // not that `public` is necessary to be included 
        // in the transpiled JS
        public email: string,
        public name: string,
        public city: string,
        readonly someReadOnlyProp: number,
        private somePrivateProp: number) {
        // No need to manually do the assigments as they
        // are automagially transpiled into JS
        // this.email = email;
        // this.name = name;
        // this.somePrivateProp = 3;
        // ...
    }
}

// ABSRTACT CLASSES
// ////////////////////////

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getSepia(): void
    getReelTime(): number {
        return 8;
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia");
    }
}

const insta = new Instagram("front", "filter", 3);
insta.getReelTime()

// GENERICS
// ////////////////////////

// Allows to receive an object a type, and return an object of the same type.

function identity<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number
}

interface Animal {
    legs: number
}

console.log(identity<Bottle>({ brand: "JW", type: 2 }));
console.log(identity<Animal>({ legs: 4 }));

/**
    
    rewrite the following function using the arrow syntax:

    function getSearchProducts<T>(products: T[]: T) {
        // do some database operations
        const myIndex = 3
        return products[myIndex]
    }
 * 
 */

const getSearchProducts = <T>(products: T[]): T => {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

// Here, in a React environment, Devs place a coma to mention
// this is NOT a JSX syntax
const getSearchProducts2 = <T,>(products: T[]): T => {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class OnlineCourse implements Course {
    constructor(
        public name: string,
        public author: string,
        public subject: string,
        public url: string
    ) { }
}

class InPresenceCourse implements Course {
    constructor(
        public name: string,
        public author: string,
        public subject: string,
        public address: string,
        public time: string
    ) { }
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}

const cart = new Sellable()

cart.addToCart(new OnlineCourse(
    "some online course",
    "some author",
    "some subject",
    "some url"
))

cart.addToCart(new InPresenceCourse(
    "some online course",
    "some author",
    "some subject",
    "some address",
    "at some time in the future"
))

/**
    NARROWING
 */

interface UserExample {
    name: string,
    email: string
}

interface AdminExample extends UserExample {
    isAdmin: boolean
}

function isAdminAccount(account: UserExample | AdminExample): boolean {
    return "isAdmin" in account
}

console.log(isAdminAccount({ name: "my name", email: "my@email.com" }));
console.log(isAdminAccount({ name: "my name", email: "my@email.com", isAdmin: true }));

// ///////

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    // if this return true, the return type is Fish
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet // now TS knows this is a Fish
        return "fish food"
    } else {
        pet // now TS knows this is Bird
        return "bird food"
    }
}

// ///////////

