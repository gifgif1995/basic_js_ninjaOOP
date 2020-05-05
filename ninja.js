class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("Hi there, My name is " + this.name);
        return this;
    }

    showStats() {
        console.log("Name: " +  this.name + ", " +"Health: " + this.health + ", " +"Speed: " + this.speed + ", " + "Strength: " + this.strength);
        return this;
    }
    drinkSake() {
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Ryan");
ninja1.sayName();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();

