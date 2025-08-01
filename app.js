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
        alert(nombreAmigo);
    }
    limpiarCaja();
    console.log(listaAmigos);
}    

    
    // Creación de una función para limpiar la caja de texto.
function limpiarCaja(){
    let valorCaja = document.getElementById("amigo");
    valorCaja.value = "";
}