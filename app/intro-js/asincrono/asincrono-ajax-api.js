//--Codigo Activo--
var v_link = "http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios",
    v_nombre = document.getElementById("form-nombre"),
    v_apellido = document.getElementById("form-apellido"),
    v_pais = document.getElementById("form-pais"),
    v_botonSubmit = document.getElementById("form-submit"),
    v_botonDelete;
v_req = new XMLHttpRequest();
    
//Cargar la lista de usuarios
reloadApi();

//AJAX: Asynchronous Javascript And Xml, actualiza partes de la pagina sin interrumpir lo demas.
function renderApi(v_usuarios){
    //map(x => x): recorre cada elemento(x) del array (como si fuera ForEach)
    //y ejecuta el arrow function ( => ), puede ser operado con alguna operacion...
    // `${}`: Literal string.
    //.join(""): Separar elementos por lo que esta dentro de las comillas.
    const v_usuRender = v_usuarios
    //operador ternario(?): (valor a validar) ? (valor si existe) :(sino) (otro valor sino existe).
        .map((usuario,indice) => `<tr>
                         <td>${usuario.nombre ? usuario.nombre : "vacioN"}</td>
                         <td>${usuario.apellido ? usuario.apellido : "vacioA"}</td>
                         <td>${usuario.pais ? usuario.pais : "vacioP"}</td>
                         <td><button class="button-delete" data-indice=${indice}>Eliminar</button></td>
                         </tr>`)
        .join("");
    document.getElementById("ajax-api-lista").innerHTML = v_usuRender;
    v_botonDelete = document.getElementsByClassName("button-delete");
    //array.from: crea una copia superficial de una instancia que sea "array-like o object iterable"
    Array.from(v_botonDelete).forEach(boton => {
        v_botonDelete.onclick = putApi;
    });
}
         
//Method POST: Envia un usuario
function postApi(e){
    e.preventDefault();
    const v_datos_post = {
        nombre: v_nombre.value,
        apellido: v_apellido.value,
        pais: v_pais.value
    };
    console.log(v_datos_post);
    fetch(
        v_link,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(v_datos_post)
        }
    ).then(response => response.json())
     .then(respuesta =>{
         console.log('Succes:', respuesta);
         reloadApi()//refrescar lista
        })
     .catch(error => {console.log('Error:', error)})
}

//Method PUT: eliminar usuario
function putApi(e){
    e.preventDefault();
    fetch(
        v_link+`${indice}`,
        {
            method: 'DELETE',
        }
    ).then(response => response.json())
     .then(respuesta =>{
         console.log('Succes:', respuesta);
         reloadApi()//refrescar lista
        })
     .catch(error => {console.log('Error:', error)})
}

//Refrescar la lista
function reloadApi(){
    fetch(v_link)
        .then(response => response.json())
        //Enviar datos a funcion render
        .then(respuesta => renderApi(respuesta));
}

//Ejecutar funcion posApi
v_botonSubmit.onclick = postApi;