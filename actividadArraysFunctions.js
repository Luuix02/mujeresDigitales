let colores = ["Morado", "Rosado", "Verde", "Azul"];
console.log(colores[0]); //Imprime el primer elemento del array
console.log(colores[3]); //Imprime el ultimo elemento del array
colores.push("Rojo"); //Agregar otro color al array
console.log(colores);
colores.shift(); // Elimina el primer color del array
console.log(colores);
console.log("¿Cuántos colores hay en el arreglo? : " + " " + colores.length);

//FUNCIONES

function darBienvenida(nombre) {
  return "Bienvenida" + " " + nombre + "!";
}

console.log(darBienvenida("Ana"));



function sumarTresNumeros(a,b,c) {
  return a+b+c;
}
console.log(
  "La suma es igual a : " +
    " " +
    sumarTresNumeros(4,3,2)
);
