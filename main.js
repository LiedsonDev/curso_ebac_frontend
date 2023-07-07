function Pet(nome, raca, sexo) {
    this.nome = nome,
    this.raca = raca,
    this.sexo = sexo
}

function Cat(nome, raca, sexo) {
    Pet.call(this, nome, raca, sexo)
}

function Dog(nome, raca, sexo) {
    Pet.call(this, nome, raca, sexo)
}

const pet1 = new Cat('Mel', 'Siamês', 'fêmea');
const pet2 = new Dog('Bolinha', 'Buldogue', 'macho');
const pet3 = new Cat('Amora', 'Persa', 'fêmea');

console.log(pet1);
console.log(pet2);
console.log(pet3);