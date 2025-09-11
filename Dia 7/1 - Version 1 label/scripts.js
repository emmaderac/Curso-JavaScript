    function extraerNumerosDeElementos(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}

function calcularTotalVentas() {
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;

    ventas1 = extraerNumerosDeElementos("ventasTienda1");
    ventas2 = extraerNumerosDeElementos("ventasTienda2");
    ventas3 = extraerNumerosDeElementos("ventasTienda3");
    ventas4 = extraerNumerosDeElementos("ventasTienda4");
    ventas5 = extraerNumerosDeElementos("ventasTienda5");
    ventas6 = extraerNumerosDeElementos("ventasTienda6");

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;

    let mensajeSalida = "Total Ventas: " + totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;
}