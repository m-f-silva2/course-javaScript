//--Codigo Activo--
var probar;
//AJAX: Asynchronous Javascript And Xml, actualiza partes de la pagina sin interrumpir lo demas.
function reqListener(){
    //.parse: convertir en un objeto de Javascript
    const usuarios = JSON.parse(this.responseText),
    //map(x => x): recorre cada elemento(x) del array (como si fuera ForEach) 
    //y ejecuta el arrow function ( => ), puede ser operado con alguna operacion...
    // `${}`: Literal string.
    //.join(""): Separar lo que esta dentro de las comillas.
        usuRender = usuarios.map(usuario => `<li>${usuario.nombre}</li>`).join("");
        document.getElementById("lista").innerHTML = usuRender;
}
var Req = new XMLHttpRequest();
//Cargar la lista de usuarios
function reqGet(){
    //Al cargar la pagina
    Req.addEventListener("load", reqListener);
    //Obtiene por get los data de usuarios.
    Req.open("GET", "http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
    Req.send();
}
reqGet();//Ejecutar cargar lista
//Envia un usuario
function reqPost(){
    Req.open("POST","http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios",true);
    Req.setRequestHeader(
        "Conten-type",
        "application/x-www-form-urlencoded"
    );
    Req.send("nombre = Lunes4");
    //Ejecuta la funcio refrescar
    setTimeout(reqReload,3000);
}
//Ejecuta la funcion de enviar usuario
//No funciona...
document.getElementById("boton-post").onclick = reqPost();

//Refrescar la lista
function reqReload(){
    Req.open("GET", "http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
    Req.send();
}

/*--- Codigo Inactivo ---

--- Fin Codigo Inactivo ---*/


//Ejecucion
function ejecutarAsinAjax(){
    document.getElementById("ejecucionAsinAjax").innerHTML = probar;
}