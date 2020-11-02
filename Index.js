const express = require("express");
const servidor = express();
servidor.use(express.static("public"));

servidor.get("/personas", function (request, response) {
    let nombre = request.query.nombre;
    response.send(nombre);
}
);

servidor.listen(3000);