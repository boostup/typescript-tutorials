const User = {
    name: "Fred",
    email: "fred@gmail.com",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }

createUser({ name: "Fred", isPaid: true });

function createCourse(): { name: string, price: number } {
    return { name: "reactjs", price: 399 }
}

// define custom type
type User2 = {
    readonly _id: string
    name: string;
    email: string;
    isActive?: boolean;
}

const user: User2 = {
    _id: "someIdString",
    name: "Fred",
    email: "fred@gmail.com",
    // isActive: true
    // isActive is optional 
    // due the question mark
    // in the User2 type definition
}

// this error is due to 
// `readonly` in User2 type definition
user._id = "someOtherIdString";


function createUser2(user: User2): User2 {
    // ...do your thing
    return { name: "", email: "", isActive: true }
}
createUser2({ name: "", email: "" });

