let score: number | string = 33;

score = 44
score = "55"

type User = {
    name: string
    id: number
}
type Admin = {
    username: string
    id: number
}

let fred: User | Admin = { name: "fred", id: 334 }
fred = { username: "fb", id: 334 }

function getDbId(id: number | string) {
    console.log(`DB id is of type: ${typeof id}`);
    if (typeof id === "string") {
        return id.toLowerCase()
    }
    if (typeof id === "number") {
        return id.toLowerCase()
    }
}

let seatAllocation: "window" | "middle" | "aisle"

seatAllocation = "aisle"
seatAllocation = "crew"