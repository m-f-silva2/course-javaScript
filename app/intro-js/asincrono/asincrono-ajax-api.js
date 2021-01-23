var v_link = "http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios",
    v_indice = document.getElementById("form-indice"),
    v_nombre = document.getElementById("form-nombre"),
    v_apellido = document.getElementById("form-apellido"),
    v_pais = document.getElementById("form-pais"),
    v_botonSubmit = document.getElementById("form-submit"),
    v_botonReset = document.getElementById("form-reset"),
    v_botonDelete,
    v_botonEdit;
v_req = new XMLHttpRequest();
let v_usuarios = [];
refreshApi();//Cargar la lista de usuarios

//AJAX: Asynchronous Javascript And Xml, actualiza partes de la pagina sin interrumpir lo demas.
function getApi(usuarios){
    v_usuarios = usuarios;//Se guarda para ser usado en getApi() y putApi()

/** map(x => x): recorre cada elemento(x) del array (como si fuera ForEach)
    y ejecuta el arrow function ( => ), puede ser operado con alguna operacion...// `${}`: Literal string.
    .join(""): Separar elementos por lo que esta dentro de las comillas.*/
    const v_usuRender = v_usuarios
/** operador ternario(?): (valor a validar) ? (valor si existe) :(sino) (otro valor sino existe).*/
/** indice: es parte de la estructura del .map se usa como si fuera un Id*/
        .map((usuario,indice) => `<tr>
                         <td>${usuario.nombre ? usuario.nombre : "vacioN"}</td>`+
                         /*<td>${usuario.apellido ? usuario.apellido : "vacioA"}</td>
                            <td>${usuario.pais ? usuario.pais : "vacioP"}</td>*/
                        `<td>
                            <button class="button-edit" data-indice=${indice}>Editar</button>
                            <button class="button-delete" data-indice=${indice}>Eliminar</button>
                        </td>
                        </tr>`)
        .join(""); 
    document.getElementById("ajax-api-lista").innerHTML = v_usuRender;
    v_botonDelete = document.getElementsByClassName("button-delete");
/** array.from: crea una copia superficial de una instancia que sea "array-like o object iterable"*/
    Array.from(v_botonDelete).forEach(v_boton_delete => {
        v_boton_delete.onclick = deleteApi;
    });
    v_botonEdit = document.getElementsByClassName("button-edit");
    Array.from(v_botonEdit).forEach(v_boton_edit => {
        v_boton_edit.onclick = putApi;
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
         refreshApi()//refrescar datos
        })
     .catch(error => {console.log('Error:', error)})
}

//Method PUT: editar usuario
function putApi(e){
    e.preventDefault();
/**e.target.dataset.indice: identificador donde se encuentra el boton, 
   para seleccionar el coincidente del array con el valor del identificador*/
    if(e.target.dataset.indice){
        const v_datos_put = v_usuarios[e.target.dataset.indice];
        //Cambiar valores de los inputs
        v_indice.value = e.target.dataset.indice;
        v_nombre.value = v_datos_put.nombre ? v_datos_put.nombre : '';
        v_apellido.value = v_datos_put.apellido ? v_datos_put.apellido : '';
        v_pais.value = v_datos_put.pais ? v_datos_put.pais : '';
        v_botonSubmit.innerText = 'Editar';
    }else{
        v_botonSubmit.innerText = 'Enviar';
    }
}

//Method DELETE: eliminar usuario
function deleteApi(e){
    e.preventDefault();
    fetch(
        v_link+`/${e.target.dataset.indice}`,
        {method: 'DELETE'}
        )
    .then(response => response.json())
    .then(respuesta =>{
         console.log('Succes:', respuesta);
         refreshApi()//refrescar datos
        })
     .catch(error => {console.log('Error:', error)})
}

//Refrescar los datos
function refreshApi(){
    fetch(v_link)
        .then(response => response.json())
        //Enviar datos a funcion render
        .then(respuesta => getApi(respuesta));
}

//Ejecutar funcion posApi
v_botonSubmit.onclick = postApi;

//resetear texto boton Enviar
v_botonReset.onclick = ()=>{v_botonSubmit.innerText = "Enviar"};