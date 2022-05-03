const nombre = 'Vicente';
const apellido = 'Mori';

console.log(nombre)

let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto)

function getSaludo(nombre) {
    return 'Hola Mundo' + nombre;
}

console.log(`Este es un  texto: ${getSaludo(nombre)}`)