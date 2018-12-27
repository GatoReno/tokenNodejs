// db

const mariadb = require('mariadb');
const conecta = mariadb.createPool({ // Open a new connection                                                                                                                                           
    host: '192.168.64.2', 
    user:'root', 
    password: '',
    database : 'TUsers',
    port: '80'
});


conecta.getConnection()
    .then(conn => {
      console.log("connected ! connection id is " + conn.threadId);
      conn.end(); //release to pool
    })
    .catch(err => {
      console.log("not connected due to error: " + err);
    });

    module.exports = conecta;
/*
let fetchData = async () => {
  let conecction
  try{
      conecction = await conecta.getConnection()
      const filas = await conecction.query("SELECT 1 as val")
      filas.forEach((fila) => {
          console.log(fila)
      })
  }catch(err){
      return err
  }
};

fetchData();

*/