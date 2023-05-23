const actosDelictivos = {
    "actos_delictivos": [
        {
            "id": "000001",
            "direccion": "Calle Principal 123",
            "coordenadas": {
                "latitud": -8.110895983145374,
                "longitud": -79.02869760990144
            },
            "tipo_delito": "Robo a mano armada",
            "descripcion": "Se reportó un robo a mano armada en una tienda de conveniencia en la Calle Principal 123.",
            "fecha": "2023-05-15",
            "hora": "19:30",
            "detalles_adicionales": "El sospechoso portaba una pistola y huyó en un automóvil negro.",
            "actores_delito": [
                {
                    "nombre": "Juan Pérez",
                    "edad": 28,
                    "genero": "Masculino",
                    "descripcion": "El sospechoso era de complexión delgada, pelo negro y vestía una chaqueta azul."
                }
            ]
        },
        {
            "id": "000002",
            "direccion": "Avenida Central 456",
            "coordenadas": {
                "latitud": -8.111772257082531,
                "longitud": -79.02780175209047
            },
            "tipo_delito": "Asalto a peatón",
            "descripcion": "Un peatón fue asaltado en la Avenida Central 456 por un individuo armado con un cuchillo.",
            "fecha": "2023-05-18",
            "hora": "14:15",
            "detalles_adicionales": "El asaltante llevaba una sudadera roja y huyó corriendo hacia el parque cercano.",
            "actores_delito": [
                {
                    "nombre": "María López",
                    "edad": 22,
                    "genero": "Femenino",
                    "descripcion": "La asaltante era de estatura media, pelo rubio y llevaba gafas de sol."
                }
            ]
        },
        {
            "id": "000003",
            "direccion": "Calle del Sol 789",
            "coordenadas": {
                "latitud": -8.111373950984236,
                "longitud": -79.02822017669679
            },
            "tipo_delito": "Fraude cibernético",
            "descripcion": "Se detectó un caso de fraude cibernético en la Calle del Sol 789. Una persona recibió un correo electrónico falso solicitando información confidencial.",
            "fecha": "2023-05-16",
            "hora": "10:00",
            "detalles_adicionales": "Se sospecha que el ataque proviene de un servidor ubicado en otro país.",
            "actores_delito": [
                {
                    "nombre": "Desconocido",
                    "edad": null,
                    "genero": "Desconocido",
                    "descripcion": "El autor del fraude utilizó una identidad falsa en línea y ocultó su ubicación real."
                }
            ]
        }
    ]
}

export const getDelitos = () => {
    //const jsonActosDelictivos = JSON.stringify(actosDelictivos);
    return actosDelictivos;
}