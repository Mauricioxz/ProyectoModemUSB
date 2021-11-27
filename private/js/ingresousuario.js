//Declarando variables para los controles
var txtCor = document.getElementById("txtCor");
var txtCon = document.getElementById("txtCon");
var btnIngresar = document.getElementById("btnIngresar");

//Creamos un procedimiento para Limpiar
function Limpiar() {
    txtCor.value = "";
    txtCon.value = "";
    txtCor.focus();
}

//Creamos un procedimiento para validar al usuario
function ValidarUsuario() {
    if (txtCor.value == "" || txtCor.value == null) {
        alert("Ingrese su correo");
        txtCor.focus();
    } else if (txtCon.value == "" || txtCon.value == null) {
        alert("Ingrese su contraseña");
        txtCon.focus();
    } else {
        //Capturando valores
        var cor = txtCor.value;
        var con = txtCon.value;
        auth.signInWithEmailAndPassword(cor, con)
            .then((userCredential) => {
                alert("Bienvenido a DevModem Operation");
                window.location = "interfaz.html";
            })
            .catch((error) => {
                alert("Correo o Contraseña incorrecta, inténtelo de nuevo.");
                Limpiar();
            });
    }
}

//Llamamos al procedimiento en el botón
btnIngresar.addEventListener("click", ValidarUsuario);