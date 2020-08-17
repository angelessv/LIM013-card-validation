import validator from './validator.js';


//*console.log(validator);

// document.getElementById("btnsend").addEventListener('click', ()=>{
//     event.preventDefault()
//     console.log("Sirvo para algooo")
// });
const comenzar= document.getElementById("siguiente2");
comenzar.addEventListener("click",() => {
    event.preventDefault()

    document.getElementById("formulario1").style.display = "none";
    document.getElementById("formulario2").style.display = "block";

    
});


const seguir = document.getElementById("siguiente3");
seguir.addEventListener("click", () => {
    event.preventDefault()
    let departamento = document.getElementById("Departamento").value;
    let provincia = document.getElementById("Provincia").value;
    let distrito = document.getElementById("Distrito").value;
    let direcc = document.getElementById("direccion").value;
    let referencia = document.getElementById("referencia").value;
    let telcont = document.getElementById("telefono").value;
    let mensajealert =document.getElementById("mensajealert");

    if (departamento === "" || provincia === "" || distrito === "" || direcc === "" || referencia ==="" || telcont ===""){
        mensajealert.innerHTML ="*Ingrese todos sus datos.";
        return;
    }

    document.getElementById("formulario2").style.display = "none";
    document.getElementById("formulario").style.display = "block";
    document.getElementById("tarjetaimagen").style.display = "block";
});

function capturar() {
    event.preventDefault()

    let nombretit = document.getElementById("nombre").value;
    let apellidos = document.getElementById("Apellido").value;
    let card = document.getElementById("Tarjeta").value;
    let cvv =document.getElementById("cvv").value;
    let resultado = validator.isValid(card);
    let final = validator.maskify(card);

    let mensajealert1 = document.getElementById("mensajealert1");

    if (card === "" || nombretit === "" || apellidos === "" || cvv === "") {
        mensajealert1.innerHTML ="*Ingrese todos los datos.";
        return
    }

    let mensaje = document.getElementById("mensaje1");
    let mensaje2 = document.getElementById("mensaje2");
    let nombrecl = document.getElementById("nombre1").value;
    let mensaje3 = document.getElementById("mensaje3");
    let mensaje4 = document.getElementById("mensaje4");
    let mensaje5 =document.getElementById("tarjetainvalida");

    if (resultado == true) {
        
        mensaje.innerHTML = "¡Gracias por tu Compra!";
        mensaje2.innerHTML = nombrecl;
        mensaje3.innerHTML = "Pago realizado con tarjeta: " + final;
        mensaje4.innerHTML = "En breve te llegara un correo con la confirmación de tu compra.";

        document.getElementById("formulario").style.display = "none";
        document.getElementById("tarjetaimagen").style.display = "none";
        document.getElementById("compraexitosa").style.display = "block";
    }
    else {
        mensaje5.innerHTML ="*El número ingresado de tarjeta no es valido. Volver a intentar";
        
    }
}
document.getElementById("pagar").addEventListener("click", capturar)


