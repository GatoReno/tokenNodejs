const fetch = require('node-fetch');

async function getNombre(name){
 const url = `https://api.github.com/users/${name}`;
 const res = await fetch(url);
 const json = await res.json();
    
console.log(json);
  
};

getNombre('titan');