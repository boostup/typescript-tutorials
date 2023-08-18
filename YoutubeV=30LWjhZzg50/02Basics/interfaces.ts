interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string // optional
    // startTrial: () => string
    startTrial(): string //alternate syntax
    getCoupon(couponName: string): number
}

const fred: User = {
    dbId: 145,
    email: "fb@gmail.com",
    userId: 112,
    startTrial: () => {
        //return 2 //TS would complain that it needs to be a string
        return ""
    },
    // notice param `name` does not have 
    // to match `couponName` as in interface definition
    getCoupon: (name: "some coupon named 10") => {
        return 10
    }

}
fred.email = "fred@gmail.com"
fred.dbId = 33 // cannot be edited because if `readonly`

// Topic: re-opening of interface
// allows to increase a previously defined interface
// which in this case is `User`, since it was already
// define at the top of this file
// And now the `fred` variable of interface `User` 
// is required to provide the `githubToken`
interface User {
    githubToken: string
}

// interface heritage
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}
// `extends` keyword accepts a comma-separated list of
// interfaces, ie: 
// interface Admin extends User, Employee, ... {}

const user: Admin = {
    dbId: 2,
    userId: 23,
    email: "fb@gmail.com",
    getCoupon: (couponName: string) => 3,
    githubToken: "",
    startTrial: () => "started trial"
}

// further reading: Differences Between Type Aliases and Interfaces
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

