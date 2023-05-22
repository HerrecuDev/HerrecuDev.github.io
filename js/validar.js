function formulario()
{

/**Le damos las variables a los datos reogidos en el formulario */

    //Datos del formulario:
    
        const usuario = document.getElementById("nomUser").value;
        const name = document.getElementById("nombre").value;
        const correo = document.getElementById("email").value;
        const contraseña = document.getElementById("clave1").value;
        const repetirContraseña = document.getElementById("clave2").value;
        const terminos = document.getElementById("terminos").checked;



        //Añadimos las Expresiones regulares para el Correo y para las claves :
        var expRegularCorreo = /\w+@\w+\.+[a-z]/;
        var expRegularContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#\$@!%&*?])(?!\s)[a-zA-Z\d#\$@!%&*?]{8,16}$/;

        //Añadimos una variable booleana para verificar los datos:
        var validarDatos = true;
        



     /**Comenzamos con la Validacion de campos del formulario */
     if (usuario == "" || name == "" ||correo == "" ||contraseña == "" || repetirContraseña == "") 
     {
        Swal.fire({
            icon: 'error',
            title: 'Cuidado!',
            text: 'No puede haber ningun campo vacio',
        })            
        validarDatos = false;
     }


     else if (!expRegularCorreo.test(correo)) 
     {
        Swal.fire({
            icon: 'error',
            title: 'Cuidado!',
            text: 'Correo Inválido',
        })            
        validarDatos = false;
     }

     else if ((!expRegularContraseña.test(contraseña)) || (!expRegularContraseña.test(repetirContraseña)))
     {
        Swal.fire({
            icon: 'error',
            title: 'Cuidado!',
            text: 'El formato de la contraseña no es posible',
        })            
        alert("La contraseña introducida no es posible, debe tener al menos una minúscula, una mayúscula, un dígito, un carácter especial y tener una longitud entre 8 y 16 caracteres.")
        validarDatos = false;
     }

   
    else if (contraseña != repetirContraseña) 
    {
        Swal.fire({
            icon: 'error',
            title: 'Cuidado!',
            text: 'Las contraseñas no coinciden',
        })            
        validarDatos = false;
    }
    else if (terminos == false) 
    {
        Swal.fire({
            icon: 'error',
            title: 'Cuidado!',
            text: 'Debe aceptar los terminos y condiciones',
        })            
       
        validarDatos = false;
    }
    if (validarDatos) 
    {
        /**Declaramos el objeto Js y lo convertimos en JSON */
        var datosObtenidos =
        {
            usuario: usuario,
            name: name,
            correo: correo,
            contraseña: contraseña,
            repetirContraseña: repetirContraseña 
        };
    /**Conversion del objeto JavaScript en un String JSON */
    
    var datosUsuario = JSON.stringify(datosObtenidos);
    
    
    Swal.fire
    ({
        icon:'success',
        title: 'Registro Completado',
        text: datosUsuario

    })
}



}
