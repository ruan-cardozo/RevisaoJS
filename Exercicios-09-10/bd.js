import mysql2 from "mysql2/promise";

async function connect(){
  if(global.connection && global.connection.state !== 'disconnected')
    return global.connection
  try {
    const mysql = mysql2
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/usuariodb")
   //console.log("Conectado ao SGBD MySQL")
   global.connection= connection
   return connection
  } catch (e) {
    console.log("Ocorreu um erro ao conetar com o banco de dados")
  }
}
export default connect
