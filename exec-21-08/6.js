/*
06. Dado o vetor de objetos, escreva uma função que retorne o resultado:
O João possui as habilidades: Javascript, ReactJS, Redux
O Maria possui as habilidades: Java, Ruby on Rails, Laravel
{
let usuarios = [{
nome: “João",
habilidades: ["Javascript", "ReactJS", "Redux"]
},
{nome: “Maria",
habilidades: [“Java", "Ruby on Rails", "Laravel"]
}];
}
*/
let usuarios = [{
    nome: 'João',
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },

    {nome: 'Maria',
    habilidades: ['Java', 'Ruby on Rails', 'Laravel']
    }];

function main() {
    for (const usuario of usuarios) {
        const habilidades = usuario.habilidades.join(', ');
        console.log(`O ${usuario.nome} possui as habilidades: ${habilidades}`);
    }
}

main();