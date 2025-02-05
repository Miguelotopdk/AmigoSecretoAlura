// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creamos un array en el que se almacenara el nombre de los amigos
let amigos =[];

// Creamos la función para agregar un amigo
function agregarAmigo() {

    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    inputAmigo.value = "";
    //Validamos que el campo no este vacio
    if(nombre = ""){
        alert ("Por favor , escribe un nombre.");
        return;
    }

//Validamos que no existan nombres duplicados
if (amigos.includes(nombreAmigo)){
    alert(`El nombre ${nombreAmigo} ya se encuentra registrado`);
    return;
}
// Agregamos el nombre al array amigos
amigos.push(nombreAmigo);

// Limpiaremos el campo de entrada
inputAmigo.ariaValu ="";

//Actualizaremos la lista en HTML
actualizarLista();

}
// Creamos la función para actualizar la lista de amigos
function actualizarLista (){
    const listaAmigos = document.getElementById('listaAmigos');

    //limpiaremos el contenido actual de la lista
    listaAmigos.innerHTML ="";

    //Recorremos el array mediante un ciclo for
    for (let i = 0; i <amigos.amigos; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);

    }
}

// Creamos la fuunción para sortear el amigo secreto
function sortearAmigo(){
    // Validamos que existan amigos disponibles
    if (amigos.length === 0) { // Verificamos si el array se encuentra vacío
        alert("Lo sentimos, no hay amigos disponibles, debes agregar por lo menos un amigo")
        return;
    }
    //Generamos un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random()*amigos.length) // Generamos un número aleatorio entre 0 y la longitud del array

    //Obtenemos el número sorteado
    const amigoSorteado = amigos[indiceAleatorio]; // Utilizamos el indice aleatorio para obtener un nombre del array  

    // Mostramos el resultado en HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado : <strong>${amigoSorteado}</strong>`;
    

}