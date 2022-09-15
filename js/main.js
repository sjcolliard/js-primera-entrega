// Primera entrega

// Destinos

class Destino {
    constructor(nombre, pais, tipo, precio) {
        this.nombre = nombre.toLowerCase();
        this.pais = pais;
        this.tipo = tipo;
        this.precio = precio;
    }
}

const destinosDisponibles = [];

const destino1 = new Destino("mar del plata", "argentina", "playa", 5500);
const destino2 = new Destino("bariloche", "argentina", "montaña", 8500);
const destino3 = new Destino("mendoza", "argentina", "montaña", 7500);
const destino4 = new Destino("santiago de chile", "chile", "ciudad", 9500);
const destino5 = new Destino("río de janeiro", "brasil", "playa", 12000);

destinosDisponibles.push(destino1);
destinosDisponibles.push(destino2);
destinosDisponibles.push(destino3);
destinosDisponibles.push(destino4);
destinosDisponibles.push(destino5);

console.log(destinosDisponibles);


// Cosas que quiero hacer:
// 1) Buscar si un destino está disponible
// 2) Poder ver la lista de los destinos disponibles 
// 3) Calcular el costo de un destino (costo * numero de dias);
// 4) Salir 



// Inicio

function inicio() {
    alert("Bienvenid@");
    let opcion = parseInt(prompt("¿Ya estás pensando en tus próximas vacaciones? En TravelViajes te ayudamos a planificarlas. \n1)Buscá si un destino está disponible \n2)Conocé los destinos que tenemos para ofrecerte \n3)Calculá el costo de tus próximas vacaciones \n4) Salir"));
    return opcion;
}


// Función buscar destino para ver si está disponible:

function buscarDestino() {
    let destinoBuscado = prompt("Escribe el nombre del destino que deseas visitar").toLowerCase();
    let destinoSeleccionado = destinosDisponibles.find(destinoSeleccionado => destinoSeleccionado.nombre === destinoBuscado);

    if (destinoSeleccionado == undefined) {
        alert("Te pedimos disculpas. El destino que estás buscando no está disponible");

    } else if (destinoSeleccionado.nombre == destinoBuscado) {
        alert("El destino que estás buscando está disponible");

    }
    console.log(destinoSeleccionado);
}



// Función para ver la lista completa de destinos

function consultarDestinos() {
    let cantidadDestinos = destinosDisponibles.length;
    let nombresDestinos = destinosDisponibles.map((destino) => destino.nombre);
    console.log(nombresDestinos);

    alert("Tenemos para ofrecerte " + cantidadDestinos + " destinos: " + nombresDestinos);
    // Comentario: acá no sé como hacer para que queden los nombres separados. 
}


// Función para calcular el costo de un destino (* numero de dias);

function calcularCosto() {
    let destinoBuscado = prompt("Escribe el nombre del destino que deseas visitar").toLowerCase();
    let destinoSeleccionado = destinosDisponibles.find(destinoSeleccionado => destinoSeleccionado.nombre === destinoBuscado);

    if (destinoSeleccionado == undefined) {
        alert("Te pedimos disculpas. El destino que estás buscando no está disponible");

    } else if (destinoSeleccionado.nombre == destinoBuscado) {
        let cantidadDias = parseInt(prompt("El destino que estás buscando está disponible. Ingresá el número de días que querés viajar: "));

        while (Number.isNaN(cantidadDias)) {
            cantidadDias = parseInt(prompt("Ingresá la cantidad de días en números."));
        }

        let costoVacaciones = destinoSeleccionado.precio * cantidadDias;
        alert("El costo total de tus vacaciones a " + destinoSeleccionado.nombre + " por " + cantidadDias + " días es de $" + costoVacaciones);
    }
}

// Función salir

function salir() {
    alert("¡Muchas gracias por visitar TravelViajes! El destino de tus sueños seguirá acá esperándote...")
}


// Opciones inicio

let opcion = inicio();
switch (opcion) {
    case 1:
        buscarDestino();
        break;
    case 2:
        consultarDestinos();
        break;
    case 3:
        calcularCosto();
        break;
    case 4:
        salir();
        break;
    default:
        alert("La opción elegida no es válida.");
        break;
}
