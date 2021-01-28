let v_link = "http://bootcamp-dia-3.camilomontoyau.now.sh/usuarios/",
    v_tabla = document.getElementById("ajax-api-lista-2"),
    v_usuRender = null, 
    v_indice = null,
    v_usuario = {};

getIndice();
refreshApi();//Cargar la lista de usuarios

//Capturar indice del usuario enviado por url
function getIndice(){
/**location.search: "?indice...."
 * replace: ('caracter a buscar', 'caracter de reemplazo') para Strings.
 * split: ('caracter a buscar') separa y lo convierte en un array.
 * [posicion del array creado].
*/
    v_link = v_link+location.search.replace('?', '').split('=')[1];
}

//Refrescar los datos
function refreshApi(){
    fetch(v_link)
        .then(response => response.json())
        .then(respuesta => {
            v_usuario = respuesta;
            getApi();
        });
}

function getApi(){
    v_usuRender =   `<tr><td>Nombre: </td><td>${v_usuario.nombre ? v_usuario.nombre : "vacioN"}</td></tr>
                    <tr><td>Apellido: </td><td>${v_usuario.apellido ? v_usuario.apellido : "vacioA"}</td></tr>
                    <tr><td>Pais: </td><td>${v_usuario.pais ? v_usuario.pais : "vacioP"}</td></tr>
                    </tr>`; 
    v_tabla.innerHTML = v_usuRender;
}