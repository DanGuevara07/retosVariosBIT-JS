let num=parseInt(prompt("Ingrese un número para develar uno de los 12 apostoles"));

if(num<1 || num>12){
    alert("Error , solo puede ingresar números del 1 al 12");
}else{
    let Apostoles = ["Pedro", "Santiago", "Juan", "Andrés", "Felipe", "Judas Iscariote", "Mateo", "Tomás", "Santiago hijo de Alfeo", "Bartolomé", "Judas Tadeo", "Simón"];
    alert(`Usted ha ingresado el número ${num} y corresponde al apostol ${Apostoles[num-1]}`);
}