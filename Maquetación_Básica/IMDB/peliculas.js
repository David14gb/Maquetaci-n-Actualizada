class Movie {
    constructor(title, nacionality, genre, actors, director, foto){
        this.title = title
        this.nacionality = nacionality
        this.genre = genre
        this.actors = actors
        this.director = director
        this.foto = foto
    }
    printAll(){
        return this.title + "\n" + this.nacionality + "\n" + this.genre 
        + "\n" + this.actors + "\n"+ this.director + "\n" + this.foto;
        
    }
}
// class Professional{

//     constructor(name, age, foto){
//             this.name = name
//             this.age = age
//             this.foto = foto
//     }
// }
let batman = new Movie("Batman", "Estados Unidos", "Acción", "Christian Bale, Robbert Pattinson", "Christopher Nolan", "https://i.blogs.es/5f9fce/the-batman-the-dark-knight/500_333.jpg")
let thor = new Movie("Thor", "Estados Unidos", "Acción/Fantasía", "Thor", "Marvel","https://i.ytimg.com/vi/vKKu-Wt7O2Q/maxresdefault.jpg");
let losPitufos = new Movie("Los pitufos", "Estados Unidos", "Acción/Fantasía", "Los Pitufos", "Los Directores Pitufos", "https://i.ytimg.com/vi/jlkeR7ocvNw/maxresdefault.jpg");
let fastAndFurious = new Movie("Fast&Furious", "Estados Unidos", "Acción", "Vin Diesel", "Fast & Furious", "https://periodismodelmotor.com/wp-content/uploads/2020/10/franquicia-a-todo-gas-concluira-undecima-pelicula.jpg")
let goonies = new Movie("Los Goonies", "Estados Unidos" , "Aventura", "Goonies", "Los Goonies Directores", "https://i2.wp.com/padresfrikis.com/wp-content/uploads/2018/10/goonies.jpg?fit=620%2C350&ssl=1");

// Castillo Ambulante foto: https://img2.rtve.es/i/?w=1600&i=1593422094102.jpg
let bbdd = [batman, thor, losPitufos, goonies, fastAndFurious];

let imp = "";

function pelis(){
    document.getElementById("pelis").style.visibility = "visible";
    // Para el mensaje tras pulstar el botón de ocultar
    document.getElementById("pelisText").style.display = "none";
    // Para que no se repitan las películas cada vez que das al botón
    imp= "";
    
    for(let i=0; i<bbdd.length; i++){
        // console.log(bbdd[i]);
        imp += ` <div class="card mt-5" style="width: 18rem;">
        <img class="fotos__pelis" src="${bbdd[i].foto}" class="card-img-top" alt="Imagen Pelicula">
        <div class="card-body">
                <h5 class="card-title">Título: ${bbdd[i].title}</h5>
                <p class="card-text">Nacionality: ${bbdd[i].nacionality}</p>
                <p class="card-text">Genre: ${bbdd[i].genre}</p>
                <p class="card-text">Actors: El mejor es ${bbdd[i].actors}</p>
                <p class="card-text">Director/Peli: ${bbdd[i].director}</p>
            </div>
        </div>
        <div class="col-1"></div>`
        // console.log("--------------");
        //  console.log(`${bbdd[i].foto}`);
    }
    // console.log(imp);
    document.getElementById("pelis").innerHTML = imp
}

function crearPeli(){
    let titulo = document.getElementById("titulo").value;
    let nacionality = document.getElementById("nacionality").value;
    let genero = document.getElementById("genero").value;
    let actors = document.getElementById("actors").value;
    let director = document.getElementById("director").value;
    let urls = document.getElementById("urls").value;
    
    let nueva = new Movie(titulo, nacionality, genero, actors, director, urls)

    bbdd.push(nueva);
    console.log(bbdd);
}

function ocultar(){
    document.getElementById("pelis").style.visibility = "hidden";
    // Para cuando le des a ocultar, que no se vean las películas
    document.getElementById("pelis").innerHTML = `<div></div>`;
    // Para que se active el div que está en none en el CSS al dar a ocultar
    document.getElementById("pelisText").style.display = "block";
}