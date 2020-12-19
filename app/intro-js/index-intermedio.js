//--Codigo Activo--
var probar;//Guardar los resultados para ver en navegador
let miArray = ['Hola', 'buen día', 'adiós', 1,2,3,4,5,6,7,8,9];


function mifunction() {
    this.mifunction2 = ()=>{
        return this;
    }
}
//Crea una variable de tipo miFunction,
//como si fuera orientada a objetos
const f = new mifunction();
probar = f.mifunction2;

/*function funcion1(){
    return function funcion2() {
        return this;//sale window por no estar especificamente en un elemento, sino en todos.
    }
}

const a = funcion1()();
probar = a;

//Function arrow
const miFunction = () => {
    probar = "function arrow";
}

miFunction();//Ejecutar arrow function
*/





/*--- Codigo comentado ---

-------------------------------------------
    function soloPares(numero){
        return numero % 2 == 0;
    }

    //Array filter: filtra los valores en el array.
        /*probar ="Números pares "+miArray.filter(soloPares);
    //Otras formas
        probar ="Números pares "+miArray.filter((numero)=>{
                return numero % 2 == 0;
            }
        );
        probar ="Números pares "+miArray.filter((numero)=>numero % 2 == 0);
        
    const soloPar = (numero)=>numero % 2 == 0;
    probar ="Números pares "+miArray.filter(soloPar);
-------------------------------------------

    function convertirMayusculas(texto){
        const res = texto.toUpperCase();
        return res;
    }

    //Loop: map
    probar = miArray.map(convertirMayusculas);
-------------------------------------------

    //Funcion de convertir mayusculas(UpperCase)
    //probar = "";//para evitar undefined en el navegador
    function convertirMayusculas(actual, index, arraycompleto){
        const res = actual.toUpperCase();
        probar = arraycompleto;
    }

    //Loop: foreach, no devuelve osea return
    miArray.forEach(convertirMayusculas);


    let miArray = [];
    miArray.push(0);//push: ingresa elemento al array

    //Loop: For
    for(let i = 1;i<10;i++){
        miArray.push(i);
    }


    //Loop: While
    let miArray2 = [];
    let control = 0;
    while(control < 10){
        miArray2.push(control);
        control++;
    }
    probar = "Array 1: ["+miArray+"] \nArray 2: ["+miArray2+"]";

    const persona = {
        nombre: 'Juan',apellido: 'Valdes',edad: 21,
        nombreCompleto: function(){return `${this.nombre} ${this.apellido}`;}
    }

    //---Condicional IF----
    if(persona.edad >= 18){
        probar = persona.nombreCompleto()+" puede tomar alcohol";
    }else{
        probar = persona.nombreCompleto()+" no puede tomar alcohol";
    }
-------------------------------------------
*/

//Ejecucion
function ejecutarIntermedio(){
    document.getElementById("ejecucionIntermedio").innerHTML = probar;
}