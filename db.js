

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "EdAdmin",
    password: "123456", 
    port: 8889,
    database: "UsersT"
});


connection.connect(function(err) {
    // in case of error
    if(err){
        console.error('error connecting: ' + err.stack);
        console.log(err.code);
        console.log(err.fatal);
    }else{

        console.log('connected as id ' + connection.threadId);
    }
});

// Perform a query
$query = 'SELECT * from users LIMIT 10';

connection.query($query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Query succesfully executed: ", rows);

});

// Close the connection
connection.end(function(){
    // The connection has been closed
});


 /*
var mysql = require('mysql');

console.log('try');

var con = mysql.createConnection({
  host: "localhost",
  user: "EdAdmin",
  password: "12346",
  port: 8888,
  database: "UsersT"
});

con.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

$query = 'SELECT * from users LIMIT 10';

con.query($query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }

    console.log("Query succesfully executed: ", rows);
});



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

*/

/*


//Mariadb

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
//
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

