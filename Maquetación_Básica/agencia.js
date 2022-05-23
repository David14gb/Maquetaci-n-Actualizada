
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
        "destino": destino, 
        "numeroPersonas" : numeroPersonas,
        "fecha" : fecha
    }
    console.log(person);

    data.push(person);
    console.log(data);

}

function filtrado(){
    // let datas = [];
    // console.log("Hola");
    // for (let i = 0; i < data.length; i++){
    // console.log("Hola1");
    //     if(data[i].destino == "CANARIAS") {
    //         datas.push(data[i]);
    //         console.log("hola2");
    //     }
    //     console.log(data[i]);
    // }
    // console.log("hola4");

    let destiny = " "
    //  con metodo filter filtro el array de personas por el destino
    let res = data.filter(elemento => (elemento.destino == "CANARIAS" || elemento.destino == "MALLORCA" || elemento.destino == "GALICIA" ));
    console.log(res);

    //  for, para recorrrer el array que devuelve filter y pintarlo en vista
    for(let i = 0; i < res.length; i ++){

        destiny += `<h1>${res[i].nombre} ${res[i].destino}</h1>` 
    }

    document.getElementById("filtrado").innerHTML = destiny;
    console.log(destiny);
    // <ul>
    //                       <li> nombre : ${data[i].nombre}</li>
    // </ul> ;
}
function recoge(){
    let aData;
    for(let i =0; i<data.length; i++){

        if((data[i].destino == "CANARIAS")||(data[i].destino =="GALICIA")||(data[i].destino == "MALLORCA")){

            aData = data[i]
        }
    }
    console.log(aData);
    let lista = " ";
    for(let i = 0; i < aData.length; i ++){

        lista += `<p>${aData[i].nombre} ${aData[i].destino}</p>` 
   }

   document.getElementById("filtrado").innerHTML = lista;
   console.log(lista);
}
