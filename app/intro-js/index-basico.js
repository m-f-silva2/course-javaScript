//--Codigo Activo--
var probar;

//---METODOS----
const persona = {
    nombre: 'Juan',
    apellido: 'Valdes',
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    }
}
probar = persona.nombreCompleto();



/*--- Codigo Inactivo ---
//---FUNCIONES----
function Sumar(numeros){//(numeros): se toma como objeto.
    const resultado = numeros.num1 + numeros.num2;
    console.log(arguments);
    return resultado;
}
//var: para que pueda acceder la function cambiarTexto al valor de la variable
//{num1,num2} Se envian valores al objeto 'numeros' declarando con '{variable:valor}'

probar = Sumar({num1:1,num2:2});

//Objeto persona
let persona = {
    nombre: 'Juan c',
    apellido: 'valdes'
}
persona.nombre
--- Fin Codigo Inactivo ---*/


//Ejecucion
function ejecutarBasico(){
    document.getElementById("ejecucionBasico").innerHTML = probar;
}