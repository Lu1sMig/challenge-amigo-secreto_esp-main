//ultima edicion 23/02/2024
//motivo: Poner en practica clases

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//let intentos = 0;
//let listaNombreAmigos = [];
let amigos = [];
let numeroAmigos = 0;
//let numeroMaximo = 0;
//let flatreinicio = 0;

// Función que  agrega amigos desde le campo de  texto y añadirlo a la lista de amigos creada anteriormente.
function agregarAmigo(){
    let repetido = 0;
    // Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector 
    // para obtener el texto ingresado por el usuario.    
    let tempAmigo = document.getElementById('amigo').value;
    //let tempAmigo1 = document.querySelector('#amigo').value;
    //console.log(`1.- FaA TempAmigo: ${tempAmigo}`);
    
     // Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío.
    //  Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    //validaListaAmigos();

    if (tempAmigo === ""){
        alert("Por favor, registre un nombre.");
        console.log(`2.- FaA TempAmigo: Sin nombree: ${tempAmigo}`);
        return;
    } else {
        // Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena
        // los nombre de amigos usando el método.push().
        // Si el nombre ya esta registrado, se mitira mensaje de "¡Nombre repetido!. Por favor, registre un nombre"
        amigos.forEach((amigo) =>{
        //console.log(`3a.- FAA Amigo.forEach: ${amigo}`);
            if (amigo === tempAmigo){
            alert(`¡Nombre ${tempAmigo} repetido!. Por favor, registre un nuevo nombre`); 
            //console.log("3b.- FAA ¡Nombre ya ingresado!. Por favor, registrer un nombre"); 
            // Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
            limpiarTexto(`#amigo`);
            repetido = 1;
            return;
            }   
        });
    }
        
    if (repetido != 1){
        amigos.push(tempAmigo);
        limpiarTexto(`#amigo`);
        //console.log(`4.- FAA amigos: ${amigos}`);
        listarAmigos();
    };
   return amigos        
}

function limpiarTexto(elemento){
    document.querySelector(elemento).value = '';
}

// Función recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML.
// Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.*/
function listarAmigos(){
    //Obtener el elemento de la lista:
    //Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
    let listView = document.getElementById("listaAmigos");
  
    //Limpiar la lista existente:   // para asegurarse de que no haya duplicados al actualizar.
    listView.innerHTML = "";
  
    // Tareas específicas:
    //        Iterar sobre el arreglo:
    //             Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    //         Agregar elementos a la lista:
    //             Para cada amigo, crear un nuevo elemento de lista.
    //         Actividad
    
    amigos.forEach((amigo) => {
        listView.innerHTML += `<li>${amigo}</li>`;
        // console.log(`1.- FLA amigos[{i}]: ${amigo}`);
    });
        
}

/* Función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos.
 Usa Math.random() y Math.floor() para obtener un índice aleatorio.*/
 function sortearAmigo(){
// Tareas específicas:
// Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    numeroAmigos = parseInt(amigos.length);
    // console.log(`1.- FsA El numeroAmigos es: ${numeroAmigos}`);    
    if (numeroAmigos === 0){
        alert("Por favor, registre un nombre.");
        // console.log(`2.- FsA El numeroAmigos es 0:${numeroAmigos}`);    
        return;
    };
// Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
    let numeroGenerado =  Math.floor(Math.random()*numeroAmigos);
   // console.log(`3.- FsA El numeroGenerado es: ${numeroGenerado}`);   

// Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
    let amigoGanador = "";
    for (let i = 0; i < numeroAmigos; i++ ){
        // console.log(`3A.- amigos[${i}] : ${amigos[i]}`)
        if (i === numeroGenerado){
            amigoGanador = amigos[i];
            // console.log(`3B. El amigo Sorteado es:${amigos[i]}`);
        };
    };
    // Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  
    // e innerHTML para mostrar el amigo sorteado.
    listaAmigos.innerHTML = "";
    let resultado = document.getElementById(`resultado`);
    resultado.innerHTML = `<li>El amigo Sorteado es:</li><br></br>${amigoGanador}`;
    // console.log(`4. El amigo Sorteado es:${amigoGanador}`);
    amigos.length = 0;
 }

function reiniciarJuego() {
  //recarga la pagina.
    let reload = document.getElementById("reload");
    reload.addEventListener(`click`, _ => {
    location.reload();
    });
}

function condicionesIniciales() {
    // Button "Sortear amigo"  desahabilitado
    // Button "Añadir" Abilitado

}
