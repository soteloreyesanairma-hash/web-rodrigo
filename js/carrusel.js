let imagenes = document.querySelectorAll(".imagen");
let posicion = 0;

function cambiarImagen(){
    imagenes[posicion].classList.remove("activa");
    posicion++;

    if(posicion >= imagenes.length){
        posicion = 0;
    };
    imagenes[posicion].classList.add("activa");
}

setInterval(cambiarImagen, 2000);