const persona = {
    nombre: "tony",
    apellido: "slark",
    edad: 45,
    direccion: {
        ciudad: "Lima",
        zip: "051",
        lat: 13.123,
        lng: 15.123,
    },
};

const persona2 = {...persona }; // crea clon de objeto
persona2.nombre = "Peter";
console.log(persona);
console.log(persona2);