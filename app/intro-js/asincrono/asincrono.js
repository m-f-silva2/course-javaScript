//--Codigo Activo--
var probar;
let v_promesa = new Promise((resolve,reject) => {
    resolve("La promesa fue resuelta");
    reject("Fallo");
});
//Async
async function mifuncion(){
//await: espera el resultado de la promesa satisfecha, reemplaza la expresion ".then()"
    probar = await v_promesa;
    //console.log(probar);
}
//Ejecucion de miFuncion
mifuncion();


/*--- Codigo Inactivo ---
//Promise es una funcion constructora, que asigna un estado de espera(Pending)
//hasta que sea Resuelta(Resolved) o Rechazada(Rejected).
//ejemplos: 
let v_promesa = new Promise((resolve,reject) => {
    resolve("La promesa fue resuelta");
    //reject("Fallo");
});
//Array de promesas
probar = []//Reasignar tipo variable
for(let i=0;i<5;i++){
    probar = [
        ...probar, 
        v_promesa.then(
            respuesta => respuesta
        )
    ];
}
//Muestra todas las promesas del array
//Muestra la estructura de cada promesa
Promise.allSettled(probar)
    .then(respuesta => console.log(respuesta))
    .catch(razon => console.log(razon));

//Muestra el value de cada promesa
Promise.all(probar)
    .then(respuesta => console.log(respuesta))
    .catch(razon => console.log(razon));

//Muestra solo 1 promesa
probar = v_promesa.then(
    respuesta => respuesta
);

//-------------------------------------
//Call Back, ejemplos:
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

//Forma 2
setTimeout(ejecutarAsincrono, 3000);
//Forma 1
setTimeout(
    () => {
        probar = "call back"; 
        console.log(probar);
        }, 
    3000);

//---------------------------------
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