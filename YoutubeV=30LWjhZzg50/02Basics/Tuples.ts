const user: (string | number | boolean)[] = [1, "fb", true];
// better way/syntax for definition, 
// where the specific order is important
let user2: [string, number, boolean];
user2 = [1, "fb", true];
user2 = ["fb", 1, true];
user2 = ["fb", 1, true, ""];

let rgb: [number, number, number] = [255, 123, 112, 12]
rgb = [255, 123, 112]

type User = [number, string]
const newUser: User = [112, "fred@gmail.com"]

// This now is to illustrate the 
// TS Tuple implementation issues 
newUser[1] = "fb@gmail.com" // should not be able to modify this
// imagine you push or pop the tuple array...
// further reading about issues when relying on  TS Tuples
//  https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
