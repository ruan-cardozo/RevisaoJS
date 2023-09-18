let app = require("./db");
const conexao = require("./db")

    app.conecta.connect(function(err) {
        if (err) throw err;
        console.log("Banco Test Conectado!");
        });

    conexao.conecta.query('SELECT * FROM unidade_medida', function(err, result, fields) {
        if (err) throw err
        console.log(result)
        console.log(fields)// metadado do banco de dados em relação a tabela
    });    

    conexao.conecta.query('SELECT id_produto, nome_produto FROM produto', function(err,result) {
        if (err) throw err
        console.log(result[0])
        });
        module.exports = {conexao}

    let sqlin = "INSERT INTO unidade_medida (id_unid_med, tipo_unid_medida, abreviacao_unid_med) VALUES (4, 'milimetros', 'mm')"
    conexao.conecta.query(sqlin, function(err, result){
        if (err) throw err
        console.log("O registro ", result, " foi inserido!")
    });

    let sqldel = "DELETE FROM unidade_medida WHERE id_unid_med = 2" 
    conexao.conecta.query(sqldel, function(err, result){
        if (err) throw err
        console.log("a unidade medida ", result, " foi excluída!")
    });    