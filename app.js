//document. query selector

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';*/

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10 : ';*/

let numeroSecreto = generarNumeroSecreto ();

/*function intentoDeUsuario(){
    alert('click desde el botón');
    return;
}*/
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;    
}


asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p','Indicar un número del 1 al 10: ');
let intentos = 1;

function verificarIntento(){
    
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    document.getElementById('reiniciar').removeAttribute('disabled');
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Acertaste el número en  ${intentos} ${(intentos==1) ? 'vez' : 'veces'}`);
    }else{
        if(numeroSecreto < numeroUsuario){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

   
    return;
}

function limpiarCaja(){
    let valorCaja =document.querySelector('#valorUsuario');
    valorCaja.value='';
}


function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function mensajesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indicar un número del 1 al 10: ');
}

function reiniciarJuego(){
    //limpiar Caja
    limpiarCaja();
    //iniciar mensaje de intervalo de números
    mensajesIniciales();
    //Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el numero de intentos
    intentos = 1;
    //Deshabilitar el boton de nuevo juego

}

mensajesIniciales();