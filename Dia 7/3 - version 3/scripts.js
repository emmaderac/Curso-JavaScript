function crearParrafosTiendas(textoLabel, valorMin) {
    //crear etiquetas <p>
    let elementoParrafo = document.createElement("p");
    //crear etiqueta Label
    let elementoEtiqueta = document.createElement("label");
    //conectar input
    elementoEtiqueta.setAttribute("for", textoLabel);
    //crear input
    let elementoInput = document.createElement("input");

    //establecer articulos de input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", "0");

    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);

    // Devolver el parrafo
    return elementoParrafo;
}

function extraerNumerosDeElementos(elemento) {
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}

function calcularTotalVentas() {
    let ventas = [];

    ventas[0] = extraerNumerosDeElementos("ventasTienda1");
    ventas[1] = extraerNumerosDeElementos("ventasTienda2");
    ventas[2] = extraerNumerosDeElementos("ventasTienda3");
    ventas[3] = extraerNumerosDeElementos("ventasTienda4");
    ventas[4] = extraerNumerosDeElementos("ventasTienda5");
    ventas[5] = extraerNumerosDeElementos("ventasTienda6");

    let totalVentas = sumarTotal(ventas);
    let ventasMayor = calcularMayor(ventas);
    let ventasMenor = calcularMenor(ventas);

    let mensajeSalida = "Total Ventas: " + totalVentas + " / Mayor: " + ventasMayor + " / Menor: " + ventasMenor;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;
}

function sumarTotal(array) {
    let total = 0;
    for (let venta of array) {
        total = total + venta;
    }
    return total;
}

function calcularMayor(array) {
    let maximo = array[0];
    for (let venta of array) {
        if (venta > maximo) {
            maximo = venta;
        }
    }
    return maximo;
}

function calcularMenor(array) {
    let minimo = array[0];
    for (let venta of array) {
        if (venta < minimo) {
            minimo = venta;
        }
    }
    return minimo;
}

