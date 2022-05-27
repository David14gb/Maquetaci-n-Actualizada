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
let thor = new Movie("Thor", "Estados Unidos", "Acción/Fantasía", "Thor", "You","https://i.ytimg.com/vi/vKKu-Wt7O2Q/maxresdefault.jpg");
let losPitufos = new Movie("Los pitufos", "Estados Unidos", "Acción/Fantasía", "Los Pitufos", "hola", "https://i.ytimg.com/vi/vKKu-Wt7O2Q/maxresdefault.jpg");
let pelicula1 = new Movie("Los Goonies", "EEUU" , "Aventura", "Goonies", "los directores", "https://i.ytimg.com/vi/vKKu-Wt7O2Q/maxresdefault.jpg");

let bbdd = [thor, losPitufos, pelicula1];

let imp = "";

function pelis(){
    
    for(let i=0; i<bbdd.length; i++){
        // console.log(bbdd[i]);
        imp += ` <div class="card" style="width: 18rem;">
        <img src="${bbdd[i].foto}" class="card-img-top" alt="Imagen Pelicula">
        <div class="card-body">
                <h5 class="card-title">${bbdd[i].title}</h5>
                <p class="card-text">${bbdd[i].nacionality}</p>
                <p class="card-text">${bbdd[i].genre}</p>
                <p class="card-text">${bbdd[i].actors}</p>
                <p class="card-text">${bbdd[i].director}</p>
            </div>
        </div>`
        console.log("--------------");
         console.log(`${bbdd[i].foto}`);
    }
    console.log(imp);
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
