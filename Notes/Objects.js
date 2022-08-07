// Object literal syntax
// - used when only a single object needs to be created
// - must separate variables with commas
// - object literals are very similar to dictionaries
// - the colon is used to indicate key value pairs

const myObject = {
    property: "Value",
    otherProperty: 77,
    functionProperty: function() {
        console.log(this.property)
    }
}

// Object constructors
// - used when multiple instances of an object are needed
function Animal(legs){
    this.legs = legs
}
// Functions are created with the prototype
// - this is because each instance of an object would create its own
//   version of a function
// - assigning to a prototype allows them to inherit it, function only need be made
//   once
Animal.prototype.walk = function() {
    console.log("walking on " + this.legs + " legs")
}

// Child object
function Bird(legs) {
    // Calls the animal constructor
    Animal.call(this, legs)
}

// Inheriting prototype
Bird.prototype = Object.create(Animal.prototype)

// Creation of method
Bird.prototype.fly = function() {
    console.log("flying")
}

let pigeon = new Bird(2)
pigeon.walk()
pigeon.fly()

console.log(Bird)