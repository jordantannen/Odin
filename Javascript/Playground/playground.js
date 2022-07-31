const dog = {
    legs: 4,
    sound: "bark"
}

const cat = Object.create(dog)

cat.sound = "meow"

console.log(dog.sound)
console.log(cat.sound)

let a = {boo: "bap"}

// Spread syntax for some reason
let b = {...a}

console.log(b.boo)

const obj = {
    commet: '🌠',
    trex: '🦖'
}

for (k in obj){
    console.log(k)
}

for (k of Object.entries(obj)){
    console.log(k)
}

function Zombie(name) {
    this.name = name
    this.reanimated = Date.now()

    this.eatBrain = function() {
        return this.name + ' is hungry for 🧠'
    }
}

const jeff = new Zombie('Jeff')

console.log(jeff.eatBrain())
console.log(jeff.name)

const monkey = (name => {
    const makeSound = () => {return 'Monkey noise'}
    return {name, makeSound}
})

const george = monkey('george')

console.log(george.makeSound())