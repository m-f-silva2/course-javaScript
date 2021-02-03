const   v_listaDuenos = document.getElementById('table-tbody-duenos'),
        v_btnAgregar = document.getElementById('duenos-btnAgregar'),
        v_form = document.getElementById('duenos-form'),
        v_formTitle = document.getElementById('duenosModalLabel'),
        v_index = document.getElementById('duenos-form-indice'),
        v_identificacion = document.getElementById('duenos-form-identificacion'),
        v_nombre = document.getElementById('duenos-form-nombre'),
        v_apellido = document.getElementById('duenos-form-apellido'),
        v_pais = document.getElementById('duenos-form-select'),
        v_btnSubmit = document.getElementById('duenos-form-btnSubmit');
let     ob_duenos = [
            {identificacion: "1989089",nombre: "Alejandra",apellido: "Correa",pais: "Colombia"},
            {identificacion: "1920998",nombre: "Maria",apellido: "Kilos",pais: "Peru"},
            {identificacion: "9887412",nombre: "Bruno",apellido: "Suarez",pais: "Guatemala"},
            {identificacion: "0909457",nombre: "Fernando",apellido: "Perez",pais: "Bolivia"}
        ];

//Render: actualizar lista de datos
function renderDuenos(){
    const v_duenos = ob_duenos
        .map((dueno, index)=>`
            <tr>
                <th scope="row">${index+1}</th>
                <td>${dueno.identificacion}</td>
                <td>${dueno.nombre}</td>
                <td>${dueno.apellido}</td>
                <td>${dueno.pais}</td>
                <td>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary duenos-edit" data-toggle="modal" data-target="#duenosModal"><i class="far fa-edit"></i></button>
                        <button type="button" class="btn btn-danger duenos-delete"><i class="far fa-trash-alt"></i></button>
                    </div>
                </td>
            </tr>
        `)
        .join("");//los pasa o convierte como String.
    v_listaDuenos.innerHTML = v_duenos;
    Array.from(document.getElementsByClassName('duenos-edit')).forEach((btnEdit, index) =>  btnEdit.onclick = put(index));
    Array.from(document.getElementsByClassName('duenos-delete')).forEach((btnDelete, index) =>  btnDelete.onclick = del(index));
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
            ob_duenos[v_index.value] = ob_datosPost;
            break;
        default:
            //Insert
            ob_duenos.push(ob_datosPost);
            break;
    }
    renderDuenos();
}

//PUT: editar datos
function put(index){
/**Patron Closure */
    return function onClickHandler(){
        v_formTitle.innerText = 'Editar Dueño';
        v_btnSubmit.innerText = 'Editar';
        v_index.value = index;
        v_identificacion.value = ob_duenos[index].identificacion;
        v_nombre.value = ob_duenos[index].nombre;
        v_apellido.value = ob_duenos[index].apellido;
        v_pais.value = ob_duenos[index].pais;
    }
}

//DELETE: borrar datos, del(delete es palabra reservada)
function del(index){
    return function onClickHandler(){
        //Reemplaza los datos anteriores por los del filtro.
        ob_duenos = ob_duenos.filter((dueno, indice) => indice != index);
        renderDuenos();
    }
}

//Reset: valores del formulario
function reset(){
    v_formTitle.innerText = 'Agregar Dueño';
    v_btnSubmit.innerText = 'Guardar';
    v_index.value = '';
    v_identificacion.value = '';
    v_nombre.value = '';
    v_apellido.value = '';
    v_pais.value = '';
}

//Ejecucion de funciones.
renderDuenos();
v_form.onsubmit = post;
v_btnSubmit.onclick = post;//boton del formulario de la modal.
v_btnAgregar.onclick = reset;//boton para mostrar la modal.