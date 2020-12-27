//--Codigo Activo--
//Guardar los resultados para ver en navegador
var probar;//se ejecuta al final del archivo.
let miArray = ['Hola', 'buen día', 'adiós', 1,2,3];
let miObjeto= {a:1, b:2, c:"Hola", d: function(){return "soy una funcion"}, e: true};

//Destructuring Arrays: Desacoplar en variables mas simples
//No importa si no tienen el mismo nombre como en el array
let [hola,buen,bye,nUno,nDos,nTres] = miArray;// se usa [ ]

//Ejemplo de separar String de los demas elementos
let [s1,s2,s3,...resto] = miArray;//(...) : Spread Operator

probar = s1+" "+s2+" "+s3+", numeros: "+resto;

//Destructuring Objetos: Desacoplar en variables mas simples
//Deben tener el mismo nombre de variable como en el objeto
//let {a,b,c,d,e} = miObjeto;// se usa { }

//Ejemplo de separar funcion de los demas objetos
let {d, ...otros} = miObjeto;//(...) : Spread Operator
//probar = "d: "+d+", otros: "+otros;




/*--- Codigo Inactivo ---

function mifunction() {
    this.mifunction2 = ()=>{
        return this;
    }
}
//Crea una variable de tipo miFunction,
//como si fuera orientada a objetos
const f = new mifunction();
probar = f.mifunction2;

function funcion1(){
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

--- Fin Codigo Inactivo ---*/




//Ejecucion
function ejecutarIntermedio(){
    document.getElementById("ejecucionIntermedio").innerHTML = probar;
}