//--Codigo Activo--
var probar;

//Call Back
//setTimeOut: funcion de ejecutar despues de un tiempo dado.
//setTimeOut: (valor,funcion,..) , tiempo en milisegundos.
probar = "call back";
function sumar(num1,num2){
    return num1 + num2;
}
function restar(num1,num2){
    return num1 - num2;
}
function multiplicar(num1,num2){
    return num1 * num2;
}

//Forma 3
function multifuncion(num1,num2,operacion){
    return operacion(num1,num2);
}

probar = "Resultados: \n"+"suma: "+multifuncion(3,7,sumar)+"\n"+
         "resta: "+multifuncion(3,7,restar)+"\n"+
         "multiplicacion: "+multifuncion(3,7,multiplicar);
/*
//Forma 2
setTimeout(ejecutarAsincrono, 3000);
//Forma 1
setTimeout(
    () => {
        probar = "call back"; 
        console.log(probar);
        }, 
    3000);
*/



/*--- Codigo Inactivo ---
//Call stack
function getNombre(){
    return "Valentina";
}
function getApellido(){
    return "Sanchez";
}
function getNombreCompleto(){
    const nombre = getNombre();
    const apellido = getApellido();
    return `${nombre} ${apellido}`;//Iterar String
}
probar = getNombreCompleto();

--- Fin Codigo Inactivo ---*/


//Ejecucion
function ejecutarAsincrono(){
    document.getElementById("ejecucionAsincrono").innerHTML = probar;
}