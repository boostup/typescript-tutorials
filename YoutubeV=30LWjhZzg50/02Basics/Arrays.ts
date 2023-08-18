const superHeros = [];
superHeros.push("spiderman");

const superHeros2: string[] = [];
superHeros2.push("spiderman");

const superPowers: number[] = [];
// alternative syntax
const superPowers2: Array<number> = [];

type User = {
    name: string
    isActive: boolean
}

const allUsers: Array<User> = [];

allUsers.push("");
allUsers.push({});
allUsers.push({ name: "", isActive: true });

// alt syntax: const MLModels: number[][] = []
const MLModels: Array<Array<number>> = [
    [255, 255, 255],
    [""]
]

