
let name = "John"
let age = 101
console.log("man name: ", name)
function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}
runForLoop(["cat", "dog"])


// I was very confused on this part of the assignment. It did not seem that the function that was given originally did anything so I was confused as to what exactly I am trying to map
// const carrots = ["bright orange", "ripe", "rotten"]
// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }
// const mapVegetables = carrots.map(name => type: "carrot" + name: carrot)
// console.log(mapVegetables)



const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = people.filter(person => person.friendly === true)
console.log(filterForFriendly)

function doMathSum(a, b) {return a + b}
console.log(doMathSum(7, 4))

const produceProcduct = (a, b) => { return a * b}
console.log(produceProcduct(4, 2))

let aName = 'Janice';
console.log(`Hi ${aName}!
Welcome to Hawaii.
I hope you enjoy your stay. Please ask the president of Hawaii if you need a
nything`)

const firstName = 'Jane'
const secondName = 'Doe'
let secondAge = 100

const printString = (firstName, secondName, secondAge) => "Hi" + " " + firstName + " " + secondName + " how does it feel to be " + secondAge + "?"
console.log(printString("Kat", "Stark", 40))

const firstName2 = 'Jane'
const secondName2 = 'Doe'
const printString2 = (firstName2, secondName2, age) => `Hi ${firstName2} ${secondName2} how does it feel to be ${age}?`

console.log(printString2("Kat", "Stark", 40))

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    },
];

const filterForDogs = animals.filter(animal => animal.type === "dog")
console.log(filterForDogs)

const firstName3 = 'Janice';
console.log(`Hi ${firstName3}!
Welcome to Hawaii.
I hope you enjoy your stay. Please ask the president of Hawaii if you need a
nything`)