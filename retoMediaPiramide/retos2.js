// piramide
num= parseInt(prompt("Ingrese un numero: "));
let piramide= '';
for(let i =1; i<=num; i++) piramide += '#'.repeat(i).concat('\n');
alert(piramide);