//Declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var rbHombre=document.getElementById("rbHombre");
var rbMujer=document.getElementById("rbMujer");
var dtFecha=document.getElementById("dtFecha");
var txtCor=document.getElementById("txtCor");
var pass1=document.getElementById("pass1");
var pass2=document.getElementById("pass2");
var chkCond=document.getElementById("chkCond");
var txtDir=document.getElementById("txtDir");
var cboDist=document.getElementById("cboDist");
var numCod=document.getElementById("numCod");
var numCel=document.getElementById("numCel");
var btnRegistrar=document.getElementById("btnRegistrar");

//Creamos un procedimiento para limpiar
function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    dtFecha.value="";
    rbHombre.checked=false;
    rbMujer.checked=false;
    txtCor.value="";
    pass1.value="";
    pass2.value="";
    chkCond.checked=false;
    txtDir.value="";
    cboDist.selectedIndex=0;
    numCod.value="";
    numCel.value="";
    txtNom.focus();
}

//Creamos un procedimiento para registrar el usuario
function RegistrarUsuario(){
    if(txtNom.value=="" || txtNom.value==null){
        alert("Ingresa tus Nombres");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Ingresa tus Apellidos");
        txtApe.focus();
    }else if(rbHombre.checked==false && rbMujer.checked==false){
        alert("Seleccione su Sexo");
        rbHombre.focus();
    }else if(dtFecha.value=="" || dtFecha.value==null){
        alert("Ingrese su Fecha de Nacimiento");
        dtFecha.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        alert("Ingresa el correo");
        txtCor.focus();
    }else if(pass1.value=="" || pass1.value==null){
        alert("Ingrese su contraseña");
        pass1.focus();
    }else if(pass2.value=="" || pass2.value==null){
        alert("Repita su contraseña");
    }else if(pass1.value!==pass2.value){
        alert("Las contraseñas no coinciden. Inténtelo de nuevo!");
    }else if(chkCond.checked==false){
        alert("No puede crear su cuenta si no acepta nuestras Condiciones. Inténtelo de nuevo");
    }else if(txtDir.value=="" || txtDir.value==null){
        alert("Ingrese su Dirección (Mz. Lt. Carretera Av. etc)")
        txtDir.focus();
    }else if(cboDist.selectedIndex==0){
        alert("Seleccione un distrito, por favor.");
        cboDist.focus();
    }else if(numCod.value=="" || numCod.value==null){
        alert("Indique su código postal para mejorar con la precisión de su ubicación. (Máximo 5 dígitos)");
        numCod.focus();
    }else if(numCel.value=="" || numCel.value==null){
        alert("Indique su número telefónico para ponernos en contacto con usted. (Máximo 9 dígitos)");
        numCel.focus();
    }else{
        //Capturando valores
        var nom=txtNom.value;
        var ape=txtApe.value;
        var gen="";
        if(rbHombre.checked){
            gen="Hombre";
        }else if(rbMujer.checked){
            gen="Mujer";
        }
        var fec=dtFecha.value;
        var cor=txtCor.value;
        var con=pass1.value;
        var dist="";
        var indice=cboDist.selectedIndex;
        switch(indice){
            case 1:
                dist="Cercado de Lima"
                break;
            case 2:
                dist="Breña"
                break;
            case 3:
                dist="San Juan de Lurigancho"
                break;
            case 4:
                dist="Jesús María"
                break;
            case 5:
                dist="Lince"
                break;
            case 6:
                dist="Barranco"
                break;
            default:
                break;
        }
        var cod=numCod.value;
        var cel=numCel.value;

        //Llamamos a la función de Firebase para crear Usuarios
        auth.createUserWithEmailAndPassword(cor,con)
        .then((userCredential)=>{
            //Signed in
            alert("Se han registrado sus credenciales de acceso correctamente");
        })
        .catch((error)=>{
            alert("No se pudo registrar el usuario en Firebase");
        });

        //Creamos la tabla si no existiera y las seleccionamos
        var db=database.ref("clientes");
        
        //Asignamos los valores a la tabla que ha sido creada
        var registros=db.push();
        //Le paso los campos y los valores que tendrá la tabla
        registros.set({
            nombres: nom,
            apellidos: ape,
            genero: gen,
            fechanacimiento: fec,
            correo: cor,
            distrito: dist,
            codigopostal: cod,
            celular: cel,
        });
        alert("Se ha registrado correctamente como Cliente");
        //Llamamos a la función Limpiar
        // Limpiar();
    }
}

//Llamamos al procedimiento en el botón
btnRegistrar.addEventListener("click",RegistrarUsuario);