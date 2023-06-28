class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    run() {
        return `${this.name} runs`;
    }
    eat() {
        return `${this.name} eat`;
    }
}
class Zebra extends Animals {
    constructor(animalType, name, age, grassType){
        super(name, age);
        this.grassType = grassType;
        this.animalType = animalType;
    }
    returnAnimal(){
        return `${this.animalType}`;
    }
    eatGrass(){
        return `${this.grassType}`;
    }
}

let jaguara = new Zebra("Zebra", "Jaguara", 12, "Scutch grass");
console.log("This " + jaguara.returnAnimal() + " called " + jaguara.eat() + " this type of food: " + jaguara.eatGrass());