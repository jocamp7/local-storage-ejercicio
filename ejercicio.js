
const userName = document.getElementById('nombre');

const userEmail = document.getElementById('correo');

const userMessage = document.getElementById('mensaje');

const boton = document.getElementById('enviar');


boton.addEventListener('click',onSubmit);


function onSubmit(event) {

    event.preventDefault();

    const nameValue = userName.value;
    const emailValue = userEmail.value;
    const messageValue = userMessage.value;


    localStorage.setItem('usuario',JSON.stringify({
        name: nameValue,
        email:emailValue,
        message: messageValue
    }));


    const user = JSON.parse(localStorage.getItem('usuario'));

    const textoNombre= document.getElementById('pNombre');
    const textoEmail= document.getElementById('pEmail');
    const textoMensaje=document.getElementById('pMensaje');
    
    textoNombre.innerText = user.name; 
    textoEmail.innerText = user.email; 
    textoMensaje.innerText = user.message; 

}




/*Bonus: Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)
Mostrar los datos de los contactos guardados en el DOM
Crea un botón para borrar todos los contactos guardados en Local Storage, esto fijo que con clear*/