const conexao = require("./db");


conexao.conecta.query('SELECT * FROM unidade_medida', function(erro, result, fields) {
    if (erro) throw erro
    console.log(result);
});

exports.conexao = conexao;  