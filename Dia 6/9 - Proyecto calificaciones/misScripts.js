const notas = [7, 5, 9, 4, 8];

        function mostrarNotas() {
            let lista = '<ul>';
            for (const nota of notas) {
                lista += `<li>${nota}</li>`;
            }
            lista += '</ul>';
            document.getElementById('resultado').innerHTML = `<strong>Notas:</strong> ${lista}`;
        }

        function calcularPromedio() {
            let suma = 0;
            for (let i = 0; i < notas.length; i++) {
                suma += notas[i];
            }
            const promedio = (suma / notas.length).toFixed(2);
            document.getElementById('resultado').innerHTML = `<strong>Promedio:</strong> ${promedio}`;
        }

        function notaMayor() {
            let i = 0;
            let mayor = notas[0];
            while (i < notas.length) {
                if (notas[i] > mayor) {
                    mayor = notas[i];
                }
                i++;
            }
            document.getElementById('resultado').innerHTML = `<strong>Nota mayor:</strong> ${mayor}`;
        }

        function verAplazos() {
            let i = 0;
            let existeAplazo = false;
            do {
                if (notas[i] < 6) {
                    existeAplazo = true;
                    break;
                }
                i++;
            } while (i < notas.length);
            document.getElementById('resultado').innerHTML = existeAplazo
                ? "<strong>¡Hay aplazos!</strong>"
                : "<strong>No hay aplazos.</strong>";
        }