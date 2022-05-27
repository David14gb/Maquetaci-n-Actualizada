// $(document).ready(function(){

// class Ropa {
//     constructor(talla, color, precio){
//         this.talla = talla
//         this.color = color
//         this.precio = precio
//     }

// }



// let camiseta = new Ropa("s", "rojo", "20");
// let pantalon = new Ropa("m", "vaquero", "50");
// let gorro = new Ropa("xl", "azul", "10");

// let carrito = [];
// intro()


// function intro(){
//     let camisetaimp =`<div class="row">
//     <div class="card mt-5" style="width: 18rem;">
//         <div class="card-body">
//         <h5 class="card-title">${camiseta.color}</h5>
//         <p class="card-text">${camiseta.talla}</p>
//         <p class="card-text">${camiseta.precio}</p>
//         <a href="#" class="btn btn-primary">Añadir al carrito</a>
//         </div>
//     </div>`


// $('#mostrar').html(camisetaimp)

// }
// })


class Ropa {
    constructor(talla, color, precio){
        this.talla = talla
        this.color = color
        this.precio = precio
    }

}



let camiseta = new Ropa("s", "rojo", 20);
let pantalon = new Ropa("m", "vaquero", 50);
let gorro = new Ropa("xl", "azul", 10);

let carrito = [];

jQuery(() => {
   
$('#bt1').on('click', function(){
    let price= 0;
    carrito.push(camiseta);
    $("#mostrar2").html('');

    for(let i = 0; i<carrito.length; i++){
        console.log(carrito[i]);
        $("#mostrar2").prepend(`<p>${carrito[i]['precio']}<p>`)
        price += carrito[i]['precio']
    }
    $("#mostrar2").append(`<p>${price}<p>`)
})
$("#bt2").on("click", function(){
    let price= 0;
    carrito.push(pantalon)
    console.log(carrito);
    $("#mostrar2").html('');
    for(let i = 0; i<carrito.length; i++){
        console.log(carrito[i]);
        $("#mostrar2").prepend(`<p>${carrito[i]['precio']}<p>`)
        price += carrito[i]['precio']
    }
    $("#mostrar2").append(`<p>${price}<p>`)
})
$("#bt3").on("click", function(){
    let price= 0;
    carrito.push(gorro)
    $("#mostrar2").html('');
    for(let i = 0; i<carrito.length; i++){
        console.log(carrito[i]);
        $("#mostrar2").prepend(`<p>${carrito[i]['precio']}<p>`)
        price += carrito[i]['precio']
    }
    $("#mostrar2").append(`<p>${price}<p>`)
}) 
});


