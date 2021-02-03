const   v_listaMascotas = document.getElementById('table-tbody-mascotas'),
        v_btnAgregar = document.getElementById('index-btnAgregar'),
        v_form = document.getElementById('index-form'),
        v_formTitle = document.getElementById('formModalLabel'),
        v_index = document.getElementById('index-form-indice'),
        v_tipo = document.getElementById('index-form-select'),
        v_nombre = document.getElementById('index-form-nombre'),
        v_dueno = document.getElementById('index-form-dueno'),
        v_btnSubmit = document.getElementById('index-form-btnSubmit');
let     ob_mascotas = [
            {tipo: "Perro",nombre: "Bogy",dueno: "Camila"},
            {tipo: "Gato",nombre: "Michi",dueno: "Karen"},
            {tipo: "Loro",nombre: "Lorenzo",dueno: "Sergio"},
            {tipo: "Perro",nombre: "Firulais",dueno: "Pepe"}
        ];

//Render: actualizar lista de datos
function renderMascotas(){
    const v_mascotas = ob_mascotas
        .map((mascota, index)=>`
            <tr>
                <th scope="row">${index+1}</th>
                <td>${mascota.tipo}</td>
                <td>${mascota.nombre}</td>
                <td>${mascota.dueno}</td>
                <td>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary index-edit" data-toggle="modal" data-target="#formModal"><i class="far fa-edit"></i></button>
                        <button type="button" class="btn btn-danger index-delete"><i class="far fa-trash-alt"></i></button>
                    </div>
                </td>
            </tr>
        `)
        .join("");//los pasa o convierte como String.
    v_listaMascotas.innerHTML = v_mascotas;
    Array.from(document.getElementsByClassName('index-edit')).forEach((btnEdit, index) =>  btnEdit.onclick = put(index));
    Array.from(document.getElementsByClassName('index-delete')).forEach((btnDelete, index) =>  btnDelete.onclick = del(index));
}

//POST: enviar datos
function post(e){
    e.preventDefault();
    const ob_datosPost = {
            tipo: v_tipo.value,
            nombre: v_nombre.value,
            dueno: v_dueno.value
        },
        accion = v_btnSubmit.innerHTML;
    switch(accion){
        case 'Editar':
            //Edit
            ob_mascotas[v_index.value] = ob_datosPost;
            break;
        default:
            //Insert
            ob_mascotas.push(ob_datosPost);
            break;
    }
    renderMascotas();
    console.log(ob_datosPost);
}

//PUT: editar datos
function put(index){
/**Patron Closure */
    return function onClickHandler(){
        v_formTitle.innerText = 'Editar Mascota';
        v_btnSubmit.innerText = 'Editar';
        v_index.value = index;
        v_tipo.value = ob_mascotas[index].tipo;
        v_nombre.value = ob_mascotas[index].nombre;
        v_dueno.value = ob_mascotas[index].dueno;
    }
}

//DELETE: borrar datos, del(delete es palabra reservada)
function del(index){
    return function onClickHandler(){
        //Reemplaza los datos anteriores por los del filtro.
        ob_mascotas = ob_mascotas.filter((mascota, indice) => indice != index);
        renderMascotas();
    }
}

//Reset: valores del formulario
function reset(){
    v_formTitle.innerText = 'Agregar Mascota';
    v_btnSubmit.innerText = 'Guardar';
    v_index.value = '';
    v_tipo.value = '';
    v_nombre.value = '';
    v_dueno.value = '';
}

//Ejecucion de funciones.
renderMascotas();
v_form.onsubmit = post;
v_btnSubmit.onclick = post;//boton del formulario de la modal.
v_btnAgregar.onclick = reset;//boton para mostrar la modal.