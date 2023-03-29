//let miNombre = prompt("Cual es tu nombre?");
//console.log(miNombre);
//let profesion = "medico";
//alert("hola " + miNombre + " de profesión " + profesion)
//let edad = prompt("Cuantos años tenes?");
//let edadVieja = prompt("Cuantos años tuviste antes?");
//console.log(parseInt (edadVieja) + parseInt (edad));
//alert(`hola ${miNombre} de profesion: ${profesion}`);

let datoU = prompt("Coloque porfavor, su nombre de usuario");
let datoC = prompt("Coloque el código de acceso");
let contraseña = 1234;
let usuario = "Felipe";

/* if((Usuario == "Felipe")||(Usuario == "felipe") && (Usuario !=="") && (Contraseña === "Juan")){
    alert(`Hola ${Usuario}, bienvenido a The Box Land`);

} else if(Usuario == "juan"){
    alert(`Bienvenido ${Usuario}, a tu cuenta de The Box Land`);

}else{
    alert("Usuario no identificado");
} */

while ((datoC != contraseña) /* && (datoU != usuario) */ ){
    alert ("Código de acceso incorrecto");
    datoC = parseInt(prompt("Porfavor ingrese su código nuevamente")) ;
    alert (`bienvenido ${datoU} a The Box Land`)
}

/* let edad = parseInt(prompt("Que edad tienes?"));

let edadNinio = edad <= 17;
let edadJoven = edad <= 40;
let edadAdulto = edad > 40;

if(edadNinio){
    alert("Eres un niño");
}else if (edadJoven){
    alert("Eres un joven");
}else if (edadAdulto) {
    alert("Eres un adulto");
}else{
    alert("Quizas eres un fantasma");
} 


for (let i = 0; i <= 10; i++){
    console.log(i)
} */

let numeroIngresado = parseInt(prompt("Que edad tenes?"));
let repeticion = parseInt(prompt("cuantas veces queres multiplicar tu edad?"));

for (let i = 1; i <= repeticion; i++){
    let resultado = numeroIngresado * i;
    if(resultado == "28"){
        continue;
    }
    if(resultado == "36") {
        break;
    }
    console.log(`tu edad es ${numeroIngresado} X ${repeticion} = ${resultado}`);
} 
