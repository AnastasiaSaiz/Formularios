const express = require("express");
const servidor = express();
servidor.use(express.static("public"));


let animales= [
            {
                nombre: "Moty",
                edad: 1,
                tipo: "Gato",
            },
            {
                nombre: "Sam",
                edad: 3,
                tipo: "Perro",
            },
            {
                nombre: "Lucifer",
                edad: 2,
                tipo: "Pez",
            },
        ];
   
servidor.get("/", function (request, response) {
    let mensaje = ""
    for(let i=0;i<animales.length;i++){
        mensaje += `
        <h1>${animales[i].nombre}</h1>
        <h4>Edad: ${animales[i].edad}</h4>
        <h4>Tipo: ${animales[i].tipo}</h4>
        `
    }
    response.send(mensaje);
}
);

//AQUI EMPIEZA EL EJERCICIO2//CREAMOS LA RUTA DE /sumar-animal//


servidor.get("/sumar-animal", function (request, response) {
    let nombre = request.query.nombre;
    let edad = request.query.edad;
    let tipo = request.query.tipo;

    animales.push({nombre:nombre,edad:edad, tipo:tipo})
    for(let i=0;i<animales.length;i++){
        mensaje += `
        <h1>${animales[i].nombre}</h1>
        <h4>Edad: ${animales[i].edad}</h4>
        <h4>Tipo: ${animales[i].tipo}</h4>
        `
    }
    response.send("Animal añadido");
}
);


servidor.listen(3000);