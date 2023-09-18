const mysql = require('mysql2');

const conecta = mysql.createConnection({
host: 'localhost', // endereço banco
user: 'ruan', // usuário padrão
password: 'senha', 
database: 'exserverside' // nome do banco alvo
});
module.exports = {conecta}
