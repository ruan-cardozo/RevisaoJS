let usuarios = [{
    nome: " João",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Maria",
    habilidades: ["Java", "Ruby on Rails", "Laravel"]
  }];
  usuarios.forEach((val) =>
    console.log("O/A " + val.nome, "possui habilidades: " + val.habilidades))