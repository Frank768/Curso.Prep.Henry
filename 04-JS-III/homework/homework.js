// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var parameter = [];
  parameter = array;
  var value = parameter.shift();
  return value;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var value = array.pop();
  return value;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var lengthArray = array.length;
  return lengthArray;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var matriz= [];
  var i=0;
  while (array.length>0){
    matriz [i] = array.shift() + 1;
    i++;
  }
  return matriz;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift (elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var length = palabras.length;
  var str = palabras[0];
  var i=1;
  while (length > i){
    str = str + " " + palabras[i]   
    i++;
  }
  return str;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  for (var i=0; i<array.length; i++){
    if (elemento === array[i]){
      return true;
    }
    }
    return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (var i=0; i<numeros.length; i++){
    suma = suma + numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma =0;
  var average = 0;
  for (var i=0; i < resultadosTest.length;i++){
    suma = suma + resultadosTest[i];    
  }
  return average = suma / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var bignumber =0;
  for (var i=0; i<numeros.length; i++){
    var aux = numeros[i];
    if (aux > bignumber){
      bignumber = aux;
    }
  }
  return bignumber;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var product = 1;
  if (arguments.length === 0){
    return 0;
    }
  if (arguments.length === 1){
    return arguments[0];
    }
  for (var i=0; i < arguments.length; i++){
    product = product * arguments[i];
  }
  return product;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var bignum = 0;
var count =0;
for (var i=0; i < arreglo.length; i++){
  if (arreglo[i] > 18){
    count = count +1;
  }
}
return count;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var message1= "Es fin de semana";
  var message2 = "Es dia Laboral";
  //for (var i=0; i<numeroDeDia.length; i++){
    if (numeroDeDia === 1 || numeroDeDia === 7){
      return message1;
    } else {
    return message2; 
    }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var convertString = String (n);
  var arrayString = [];
  arrayString.push(convertString);
  if (arrayString[0][0] === "9"){
      return true;
    } else {
      return false;
    }
  }  


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var equal = arreglo[0];
  for (i=1; i <arreglo.length;i++){
    if (equal != arreglo[i]){
      return false;
    }
  }
  return true;  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var month = [];
  var count =0;
  var messageNot= "No se encontraron los meses pedidos";
  for (var i=0; i < array.length; i++){
    if (array[i] === "Marzo"){
      month.push ("Marzo");
      count++;
    }
  }
  for (var i=0; i < array.length; i++){
    if (array[i] === "Noviembre"){
      month.push ("Noviembre");
      count++;
    }
  }
  for (var i=0; i < array.length; i++){
    if (array[i] === "Enero"){
      month.push ("Enero");
      count++;
    }
  }
  if (count === 3){
    return month;
  }  else {
    return messageNot;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var numbers =[];
  for (i=0; i<array.length;i++){
    if (array[i]>100){
      numbers.push(array[i]);
    }
  }
  return numbers;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero + 2;
  for (var i=0; i<10; i++){
    if (suma != i){
      array.push(suma);
      suma= suma +2;
      } else {
        break;
      }
  }
  if (i<10){
    return ("Se interrumpió la ejecución");
    } else {
      return array;
    }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero+2;
  for (var i=0; i<10; i++){
    if (i === 4){
      continue;    //vuelve a evaluar la expresió del bucle
      } 
      array.push(suma);  
      suma = suma +2;
    }
      return array;
    }


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
