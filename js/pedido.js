let formulario = document.getElementById("formularioPedido");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = document.getElementById("Nombre").value;
    let apellidos = document.getElementById("Apellidos").value;
    let correo = document.getElementById("Correo").value;
    let producto = document.getElementById("producto").value;
    let talla = document.getElementById("talla").value;
    let cantidad = document.getElementById("Cantidad").value;
    let mensaje = document.getElementById("Mensaje").value;
    
    alert("Pedido Registrado :)")

    formulario.reset();
});