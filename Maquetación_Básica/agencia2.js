
let data = [];

function recoger() {
    
    nombre = document.getElementById("nombre").value.toUpperCase();
    origen = document.getElementById("origen").value.toUpperCase();
    destino = document.getElementById("destino").value.toUpperCase();
    numeroPersonas = document.getElementById("numeroPersonas").value.toUpperCase();
    fecha = document.getElementById("fecha").value.toUpperCase();

    let person = {
        "nombre" : nombre,
        "origen": origen,
        "destino ": destino, 
        "numeroPersonas" : numeroPersonas,
        "fecha" : fecha
    }
    console.log(person);

    data.push(person);
    console.log(data);

}

function filtrar(){
    let destiny = " "
    //  con metodo filter filtro el array de personas por el destino
    let res = data.filter(elemento => (elemento.destino == "CANARIAS" || elemento.destino == "MALLORCA" || elemento.destiny == "GALICIA" ));
    console.log(res);
}