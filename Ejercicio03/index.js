const express = require("express");
const servidor = express();

let animales = [
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
    for (let i = 0; i < animales.length; i++) {
        mensaje += `
        <h1>${animales[i].nombre}</h1>
        <h4>Edad: ${animales[i].edad}</h4>
        <h4>Tipo: ${animales[i].tipo}</h4>
        <form action="/adoptar">
        <input type = "hidden" value="${animales[i].nombre}" name="nombre"/>
        <button type="submit">Adoptar</button>
        </form>
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

    animales.push({ nombre: nombre, edad: edad, tipo: tipo });
    response.send("Animal añadido");
}
);

//aquí empieza ej ejercicio03//

servidor.get("/dejar-animal", function (request, response) {

    let formulario = `
    <form action="/sumar-animal"></form>
    <input type="text" name="nombre" placeholder="Nombre">
    <input type="text" name="edad" placeholder="Edad">
    <input type="text" name="tipo" placeholder="Tipo">
    <button type="submit">Enviar</button>
    </form>
            `;
    response.send(formulario);

}
);

//EJERCICIO 04//
servidor.get("/adoptar", function (request, response) {
    let boolean=false;
    let nombre = request.query.nombre;
    for(let i = 0; i<animales.length; i++){
        if(animales[i].nombre===nombre){
            animales.splice(i,1);
            boolean=true;

        }
    }
boolean ? response.send("Eliminado") : response.send("No existe");
}
);


//EJERCICIO 05 - metemos en el primer GET un formulario con input oculto

servidor.listen(3000);