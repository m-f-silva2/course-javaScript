const   v_listaVeterinarios = document.getElementById('table-tbody-veterinarios'),
        v_btnAgregar = document.getElementById('veterinarios-btnAgregar'),
        v_form = document.getElementById('veterinarios-form'),
        v_formTitle = document.getElementById('veterinariosModalLabel'),
        v_index = document.getElementById('veterinarios-form-indice'),
        v_identificacion = document.getElementById('veterinarios-form-identificacion'),
        v_nombre = document.getElementById('veterinarios-form-nombre'),
        v_apellido = document.getElementById('veterinarios-form-apellido'),
        v_pais = document.getElementById('veterinarios-form-select'),
        v_btnSubmit = document.getElementById('veterinarios-form-btnSubmit');
let     ob_veterinarios = [
            {identificacion: "1222400",nombre: "Andrea",apellido: "Correa",pais: "Peru"},
            {identificacion: "1200411",nombre: "Miguel",apellido: "Kilos",pais: "Colombia"},
            {identificacion: "1259412",nombre: "Lorenzo",apellido: "Suarez",pais: "Guatemala"},
            {identificacion: "1215413",nombre: "Fiona",apellido: "Perez",pais: "Peru"}
        ];

//Render: actualizar lista de datos
function renderVeterinarios(){
    const v_veterinarios = ob_veterinarios
        .map((veterinario, index)=>`
            <tr>
                <th scope="row">${index+1}</th>
                <td>${veterinario.identificacion}</td>
                <td>${veterinario.nombre}</td>
                <td>${veterinario.apellido}</td>
                <td>${veterinario.pais}</td>
                <td>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary veterinarios-edit" data-toggle="modal" data-target="#veterinariosModal"><i class="far fa-edit"></i></button>
                        <button type="button" class="btn btn-danger veterinarios-delete"><i class="far fa-trash-alt"></i></button>
                    </div>
                </td>
            </tr>
        `)
        .join("");//los pasa o convierte como String.
    v_listaVeterinarios.innerHTML = v_veterinarios;
    Array.from(document.getElementsByClassName('veterinarios-edit')).forEach((btnEdit, index) =>  btnEdit.onclick = put(index));
    Array.from(document.getElementsByClassName('veterinarios-delete')).forEach((btnDelete, index) =>  btnDelete.onclick = del(index));
}

//POST: enviar datos
function post(e){
    e.preventDefault();
    const ob_datosPost = {
            identificacion: v_identificacion.value,
            nombre: v_nombre.value,
            apellido: v_apellido.value,
            pais: v_pais.value,
        },
        accion = v_btnSubmit.innerHTML;
    switch(accion){
        case 'Editar':
            //Edit
            ob_veterinarios[v_index.value] = ob_datosPost;
            break;
        default:
            //Insert
            ob_veterinarios.push(ob_datosPost);
            break;
    }
    renderVeterinarios();
}

//PUT: editar datos
function put(index){
/**Patron Closure */
    return function onClickHandler(){
        v_formTitle.innerText = 'Editar Veterinario';
        v_btnSubmit.innerText = 'Editar';
        v_index.value = index;
        v_identificacion.value = ob_veterinarios[index].identificacion;
        v_nombre.value = ob_veterinarios[index].nombre;
        v_apellido.value = ob_veterinarios[index].apellido;
        v_pais.value = ob_veterinarios[index].pais;
    }
}

//DELETE: borrar datos, del(delete es palabra reservada)
function del(index){
    return function onClickHandler(){
        //Reemplaza los datos anteriores por los del filtro.
        ob_veterinarios = ob_veterinarios.filter((veterinario, indice) => indice != index);
        renderVeterinarios();
    }
}

//Reset: valores del formulario
function reset(){
    v_formTitle.innerText = 'Agregar Veterinario';
    v_btnSubmit.innerText = 'Guardar';
    v_index.value = '';
    v_identificacion.value = '';
    v_nombre.value = '';
    v_apellido.value = '';
    v_pais.value = '';
}

//Ejecucion de funciones.
renderVeterinarios();
v_form.onsubmit = post;
v_btnSubmit.onclick = post;//boton del formulario de la modal.
v_btnAgregar.onclick = reset;//boton para mostrar la modal.