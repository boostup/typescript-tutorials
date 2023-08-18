"use strict";
// CLASSES
// ////////////////////////
class User {
    // alt syntax for private: 
    // #somePrivateProp: number // private
    constructor(email, name) {
        this.city = "";
        this.someReadOnlyProp = true;
        this.email = email;
        // this.name = name;
        this.somePrivateProp = 3;
    }
}
const fred = new User("fred@gmail.com", "fred");
fred.city = 2;
fred.someReadOnlyProp = false; // in TSConfig file, we could tell the 
// transpiler not to even include this line,
// since it is not allowed to assign a readonly
fred.somePrivateProp;
// Shorter way to write User class
class User2 {
    constructor(
    // not that `public` is necessary to be included 
    // in the transpiled JS
    email, name, city, someReadOnlyProp, somePrivateProp) {
        this.email = email;
        this.name = name;
        this.city = city;
        this.someReadOnlyProp = someReadOnlyProp;
        this.somePrivateProp = somePrivateProp;
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
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
const insta = new Instagram("front", "filter", 3);
insta.getReelTime();
// GENERICS
// ////////////////////////
// Allows to receive an object a type, and return an object of the same type.
function identity(val) {
    return val;
}
console.log(identity({ brand: "JW", type: 2 }));
console.log(identity({ legs: 4 }));
/**
    
    rewrite the following function using the arrow syntax:

    function getSearchProducts<T>(products: T[]: T) {
        // do some database operations
        const myIndex = 3
        return products[myIndex]
    }
 *
 */
const getSearchProducts = (products) => {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
};
// Here, in a React environment, Devs place a coma to mention
// this is NOT a JSX syntax
const getSearchProducts2 = (products) => {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
};
class OnlineCourse {
    constructor(name, author, subject, url) {
        this.name = name;
        this.author = author;
        this.subject = subject;
        this.url = url;
    }
}
class InPresenceCourse {
    constructor(name, author, subject, address, time) {
        this.name = name;
        this.author = author;
        this.subject = subject;
        this.address = address;
        this.time = time;
    }
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
const cart = new Sellable();
cart.addToCart(new OnlineCourse("some online course", "some author", "some subject", "some url"));
cart.addToCart(new InPresenceCourse("some online course", "some author", "some subject", "some address", "at some time in the future"));
function isAdminAccount(account) {
    return "isAdmin" in account;
}
console.log(isAdminAccount({ name: "my name", email: "my@email.com" }));
console.log(isAdminAccount({ name: "my name", email: "my@email.com", isAdmin: true }));
function isFish(pet) {
    // if this return true, the return type is Fish
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // now TS knows this is a Fish
        return "fish food";
    }
    else {
        pet; // now TS knows this is Bird
        return "bird food";
    }
}
// ///////////
