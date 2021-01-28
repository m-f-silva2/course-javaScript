const   v_listaMascotas = document.getElementById('table-tbody-mascotas'),
        v_form = document.getElementById('index-insert-form'),
        v_tipo = document.getElementById('index-insert-tipo'),
        v_nombre = document.getElementById('index-insert-nombre'),
        v_dueno = document.getElementById('index-insert-dueno');
let ob_mascotas = [
    {tipo: "Perro",nombre: "Bogy",dueno: "Camila"},
    {tipo: "Gato",nombre: "Michi",dueno: "Karen"},
    {tipo: "Loro",nombre: "Lorenzo",dueno: "Sergio"},
    {tipo: "Perro",nombre: "Firulais",dueno: "Pepe"}
];

function renderMascotas(){
    const v_mascotas = ob_mascotas
        .map((mascota, indice)=>`
            <tr>
                <th scope="row">${indice+1}</th>
                <td>${mascota.tipo}</td>
                <td>${mascota.nombre}</td>
                <td>${mascota.dueno}</td>
                <td>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary"><i class="far fa-edit"></i></button>
                        <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                    </div>
                </td>
            </tr>
        `)
        .join("");//los pasa o convierte como String.
    v_listaMascotas.innerHTML = v_mascotas;
}

//POST: enviar datos
function post(e){
    e.preventDefault();
    
}

//Ejecucion de funciones.
renderMascotas();
v_form.onsubmit = post;