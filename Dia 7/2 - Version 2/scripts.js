    function extraerNumerosDeElementos(elemento){
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

function sumarTotal(array){
    let total = 0;
    for(let venta of array){
        total = total + venta;
    }
    return total;
}

function calcularMayor(array){
    let maximo = array[0];
    for(let venta of array){
        if(venta > maximo){
            maximo = venta;
        }
    }
    return maximo;
}

function calcularMenor(array){
    let minimo = array[0];
    for(let venta of array){
        if(venta < minimo){
            minimo = venta;
        }
    }
    return minimo;
}

let notas = [6, 9, 7, 5, 1, 5, 4, 3];

function promedio(notas) {
    
    let suma = 0;


    for(let nota of notas){
        suma = suma + nota;
    }
    
  console.log(suma / notas.length);

    return suma / notas.length;
}