// Función para dibujar un cuadrado
function dibujarCuadrado(x){
    let linea= "";
    for(let i=0; i<x ; i++){
        for(let j=0; j<x ; j++) linea+= (i===0 || i===x-1 || j===0 || j===x-1 ? "* " : "  ")
        linea += "\n";
    }
    return linea;
}

function tablaDeMultiplicar(x){
    for(let i=0; i<10; i++) console.log(`${x} x ${i+1} = ${x*(i+1)}`);
}
function imprimirHoras(){
    for(let j=0; j<=1439; j++) console.log(j-Math.trunc(j/60)*60<10 ? `${Math.trunc(j/60)}:0${j-Math.trunc(j/60)*60}`:`${Math.trunc(j/60)}:${j-Math.trunc(j/60)*60}`); 
}
function imprimir1al100(){
    let linea="";
    for(let i=1; i<=100; i++) linea += (i===100 ? `${i}`: `${i}, `);
    return(linea);
}
console.log(dibujarCuadrado(25))
// tablaDeMultiplicar(6);4
// imprimirHoras();
// console.log(imprimir1al100());
  
