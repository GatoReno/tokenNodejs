var matrix = ['Xox','y','kyo','zyo'];
var lon = matrix.length, i = 0;
for(i ; i < lon ; i++ ){
    console.log(matrix[i])
}


matrix.forEach((elemnto) =>{
    console.log(elemnto);
});


for(var elem of matrix){
    console.log(elem)
}
