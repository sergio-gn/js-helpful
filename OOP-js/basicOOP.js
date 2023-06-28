class Animals {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
    run() {
        return `${this.name} can run`;
    }
    jump() {
        return `${this.name} can jump`;
    }
}
let haramble = new Animals("Haramble", "Gorilla");
console.log(haramble);