 let resultadoActual = null;

        function actualizarVisores() {
            document.getElementById('visor1').textContent = document.getElementById('operador1').value;
            document.getElementById('visor2').textContent = document.getElementById('operador2').value;
        }

        document.getElementById('operador1').addEventListener('input', actualizarVisores);
        document.getElementById('operador2').addEventListener('input', actualizarVisores);

        function calcular(operacion) {
            let op1 = parseFloat(document.getElementById('operador1').value);
            let op2 = parseFloat(document.getElementById('operador2').value);
            let res;

            switch (operacion) {
                case 'sumar':
                    res = op1 + op2;
                    break;
                case 'restar':
                    res = op1 - op2;
                    break;
                case 'multiplicar':
                    res = op1 * op2;
                    break;
                case 'dividir':
                    res = op2 !== 0 ? op1 / op2 : 'Error: División por 0';
                    break;
                case 'potencia':
                    res = Math.pow(op1, op2);
                    break;
                case 'raiz':
                    res = op2 >= 0 ? Math.sqrt(op2) : 'Error: Raíz de número negativo';
                    break;
                case 'absoluto':
                    res = Math.abs(op2);
                    break;
                case 'random':
                    if (op1 > op2) {
                        res = 'Error: Min > Max';
                    } else {
                        res = Math.random() * (op2 - op1) + op1;
                    }
                    break;
                default:
                    res = 'Operación inválida';
            }
            resultadoActual = res;
            document.getElementById('resultado').textContent = 'Resultado: ' + res;
        }

        function redondear(tipo) {
            if (typeof resultadoActual !== 'number') return;
            let res;
            switch (tipo) {
                case 'round':
                    res = Math.round(resultadoActual);
                    break;
                case 'floor':
                    res = Math.floor(resultadoActual);
                    break;
                case 'ceil':
                    res = Math.ceil(resultadoActual);
                    break;
            }
            resultadoActual = res;
            document.getElementById('resultado').textContent = 'Resultado: ' + res;
        }