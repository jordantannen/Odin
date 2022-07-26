function animal() {
    this.name = "animal"
    this.sound= "bark"

}

animal.prototype.getSound = function(){
    return this.sound
}

function rabbit(){
    this.name = "rabbit"
    this.sound = "bunny noise"
}

rabbit.prototype = Object.create(animal.prototype)

bunny = new animal();

console.log(bunny.getSound())
console.log(bunny.getName)