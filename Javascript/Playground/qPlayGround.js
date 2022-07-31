const dog = {
    legs: 4,
    sound: "bark"
}

const cat = dog

dog.sound = "woof"

console.log(dog.sound)
console.log(cat.sound)