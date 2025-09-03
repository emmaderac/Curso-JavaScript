
        function sugerirPelicula() {
            const edad = parseInt(document.getElementById('edad').value);
            const categoria = document.getElementById('categoria').value;
            let sugerencia = "";

            if (isNaN(edad) || edad < 1) {
                sugerencia = "Por favor, ingresa una edad válida.";
            } else {
                switch (categoria) {
                    case "accion":
                        if (edad < 13) {
                            sugerencia = "Recomendamos: 'Spy Kids'";
                        } else if (edad < 18) {
                            sugerencia = "Recomendamos: 'Spider-Man: Homecoming'";
                        } else {
                            sugerencia = "Recomendamos: 'John Wick'";
                        }
                        break;
                    case "comedia":
                        if (edad < 13) {
                            sugerencia = "Recomendamos: 'Minions'";
                        } else if (edad < 18) {
                            sugerencia = "Recomendamos: 'Jumanji: Bienvenidos a la jungla'";
                        } else {
                            sugerencia = "Recomendamos: '¿Qué pasó ayer?'";
                        }
                        break;
                    case "infantil":
                        sugerencia = "Recomendamos: 'Toy Story'";
                        break;
                    case "terror":
                        if (edad < 16) {
                            sugerencia = "Lo sentimos, no hay películas de terror recomendadas para menores de 16 años.";
                        } else {
                            sugerencia = "Recomendamos: 'El Conjuro'";
                        }
                        break;
                    default:
                        sugerencia = "Selecciona una categoría válida.";
                }
            }

            document.getElementById('sugerencia').textContent = sugerencia;
        }
