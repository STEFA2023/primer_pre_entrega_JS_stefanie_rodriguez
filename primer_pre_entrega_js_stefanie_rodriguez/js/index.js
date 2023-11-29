/*e-comerce de merchandising*/

/*pomo-respuestas a cuestionario, merch de regalo*/


function respuestaInvalida(mensaje) {
    let respuesta = prompt(mensaje).toUpperCase();
    while (respuesta !== "SI" && respuesta !== "NO") {
        respuesta = prompt("Por favor, responde 'SI' o 'NO':").toUpperCase();
    }
    return respuesta;
}

function respuestaFinal(pregunta2) {
    alert(`Muchas gracias por responder el cuestionario, ${pregunta2}. ¡Ya estás participando del sorteo. ¡Mucha suerte!`);
}

/*mensaje inicial de bienvenida al sorteo*/
alert("Bienvenido a nuesto espacio de merch, lo recaudado es destinado a santuarios de animales, si respondes una serie de preguntas, participas de un sorteo por un producto de nuestra web completamente gratis!!");

let pregunta1 = respuestaInvalida("Quieres participar? ( responde SI o NO):");
if (pregunta1 == "SI") {
    alert("Genial, comncemos!");
    let pregunta2 = prompt("¿Cuál es tu nombre?:");
    let pregunta3 = prompt("¿Cuál es tu apellido?:");
    let pregunta4 = prompt("¿Cuántos años tienes?:");
    let pregunta5 = respuestaInvalida("¿Eres vegano? (responde SI o NO):");
    if (pregunta5 == "SI") {
        let pregunta6 = prompt("Hace cuanto tiempo?:");
    }else{
        let pregunta7 = prompt("¿Hay alguna razón por la cual no lo eres?:");
    }
    let pregunta8 = prompt("¿De qué país eres?:");
    let pregunta9 = respuestaInvalida("¿Te gustó nuestra página? (responde SI o NO):");
    if (pregunta9 == "SI") {
        alert("Muchas gracias!");
    }else{
        let pregunta10 = prompt("¿Qué podríamos hacer para mejorarla?:");
    }
    respuestaFinal(pregunta2);
} else {
    alert("No hay problema, disfruta de nuestra tienda!");
}