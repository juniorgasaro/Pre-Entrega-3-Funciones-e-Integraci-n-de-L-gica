// Simulador entrada-lista fiesta vip + Funciones e integración de lógica.

const edad_minima = 18;
let nombre = "";
let edad = 0;
let invitadosAceptados = 0;
let invitadosRechazados = 0;
let continuar = true;

function pedirDatos() {
    nombre = prompt("Ingresá tu nombre");
    edad = parseInt(prompt("Ingresá tu edad"));
}

function validarEdad(edad) {
    return edad >= edad_minima;
}

const calcularTotal = (invitadosAceptados, invitadosRechazados) => {
    return invitadosAceptados + invitadosRechazados;
};

while (continuar) {

    pedirDatos();

    alert("Hola " + nombre + ". Tu edad es " + edad);

    if (validarEdad(edad)) {
        alert("Podes ingresar a la fiesta " + nombre);
        invitadosAceptados++;
    } else {
        alert("No podes ingresar. La fiesta es exclusiva para mayores de 18 años.");
        invitadosRechazados++;
    }

    continuar = confirm("¿Querés registrar otro invitado?");

}

console.log("Lista cantidad de personas");
console.log("Invitados aceptados: " + invitadosAceptados);
console.log("Invitados rechazados: " + invitadosRechazados);
console.log("Total de personas: " + calcularTotal(invitadosAceptados, invitadosRechazados));