// Destinos

class Destino {
    constructor(nombre, pais, tipo, precio, imagen) {
        this.nombre = nombre;
        this.pais = pais;
        this.tipo = tipo;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const destinosDisponibles = [];

const destino1 = new Destino("Mar del Plata", "Argentina", "playa", 5500, "mdq.jpg");
const destino2 = new Destino("Bariloche", "Argentina", "montaña", 8500, "bariloche.jpg");
const destino3 = new Destino("Mendoza", "Argentina", "montaña", 7500, "mendoza.jpg");
const destino4 = new Destino("Santiago de Chile", "Chile", "ciudad", 9500, "santiago.jpg");
const destino5 = new Destino("Río de Janeiro", "Brasil", "playa", 12000, "rio.jpg");

destinosDisponibles.push(destino1);
destinosDisponibles.push(destino2);
destinosDisponibles.push(destino3);
destinosDisponibles.push(destino4);
destinosDisponibles.push(destino5);

console.log(destinosDisponibles);


// Conocé los destinos disponibles

const divDestinos = document.getElementById("divDestinos");

destinosDisponibles.forEach(destino => {
    let div = document.createElement("div");
    div.innerHTML = `<div class="destinos__lista--elemento">
                    <img src="./img/${destino.imagen}">
                    <p> ${destino.nombre} </p>
                    <p> ${destino.pais} </p>
                    <p> $${destino.precio} </p>
                    </div>`;

    divDestinos.appendChild(div);
})