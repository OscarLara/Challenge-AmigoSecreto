// Primero creamos una lista vacía para guardar los nombres
let listaAmigos = [];

/*El siguiente paso es crear la función para añadir amigos a la lista.
Primero debe capturar el texto del input.
después debe validar que el texto no sea vacío.
En caso de ser vacío, pedir que se ingrese un nombre y vaciar la caja.
En caso de no ser vacío, agregar el nombre a la lista y vaciar la caja.
*/
function agregar_amigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    // Validamos que el nombre no sea vacío:
    if (nombreAmigo === ""){
        alert("Favor de ingresar un nombre válido");
    // Si el nombre es válido, lo agregamos a la lista.    
    } else{
        listaAmigos.push(nombreAmigo);
        mostrarLista();
    }
    limpiarCaja();
    console.log(listaAmigos);
}    

    
    // Creación de una función para limpiar la caja de texto.
function limpiarCaja(){
    let valorCaja = document.getElementById("amigo");
    valorCaja.value = "";
}

function mostrarLista() {
    // 1. Seleccionamos la lista del HTML
    let listaHTML = document.getElementById("listaAmigos");

    // 2. Limpiamos su contenido
    listaHTML.innerHTML = "";

    // 3. Recorremos la lista de amigos
    for (let i = 0; i < listaAmigos.length; i++) {
        // 4. Por cada amigo, agregamos un <li>
        listaHTML.innerHTML += `<li>${listaAmigos[i]}</li>`;
    }
}


//Ahora, crearemos una fucnión que seleccione un nombre al azar d enuestra lista y limpie todo para poder volver a usar la página.
function sortearAmigo(){
    if (listaAmigos.length === 0){
        alert ("Se necesita tener al menos un nombre para poder jugar")
    }else{
        indice = Math.floor(Math.random()*(listaAmigos.length));
        amigoSorteado = listaAmigos[indice];
        document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;


    }
}