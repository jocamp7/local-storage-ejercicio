
const userName = document.getElementById('nombre');

const userEmail = document.getElementById('correo');

const userMessage = document.getElementById('mensaje');

const boton = document.getElementById('enviar');

const botonBorrar=document.getElementById('botonBorrar');


botonBorrar.addEventListener('click',borrarStorage);

boton.addEventListener('click',onSubmit);


function clearTextFields() {
  userName.value = '';
  userEmail.value = '';
   userMessage.value = '';
 }


function borrarStorage(event){
    event.preventDefault()
    localStorage.clear()
}


let i=0;
            
let array=[];


function onSubmit(event) {

    event.preventDefault();

        localStorage.setItem('usuario'+i,JSON.stringify({
            name: userName.value,
            email:userEmail.value,
            message: userMessage.value
        }));

        array.push(JSON.parse( localStorage.getItem('usuario'+i) ) )

        const elemento = document.createElement('p')
        document.body.appendChild(elemento)
    
        //creo la variable que recogerá de nuevo los datos asociados a nuestra nueva clave
        const data = JSON.parse(localStorage.getItem('usuario'+i))

        //busco el último elemento en body (el párrafo que se acaba de crear) y le agrego los campos recogidos
        document.body.lastElementChild.innerText = `${data.name} ${data.email} ${data.message}`;

    i++;

    clearTextFields();
}


/*Bonus: Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)
Mostrar los datos de los contactos guardados en el DOM
Crea un botón para borrar todos los contactos guardados en Local Storage, esto fijo que con clear*/