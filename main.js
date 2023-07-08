const arrayDeObjetos = [
    { nome: 'Paulo', nota: 7 },
    { nome: 'Ana', nota: 8 },
    { nome: 'Maria', nota: 4 },
    { nome: 'Paula', nota: 6 },
    { nome: 'Lucas', nota: 5 },
]

const alunoAprovado = arrayDeObjetos.filter(array => {
    if (array.nota >= 6) {
        return array
    }
})

console.log(alunoAprovado)