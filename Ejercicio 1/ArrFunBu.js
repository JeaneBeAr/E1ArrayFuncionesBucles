//  👉 Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

let ingPizza = ["Harina", "Agua", "Levadura", "Salsa", "Queso", "Tomate", "Oregano", "Jamon", "Aceitunas", "Cebolla"]
console.log(ingPizza)


// 👉 Crear una función que acepte ese array como parámetro.
/*Dentro de la función, debemos lograr lo siguiente: 
👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares". 
👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
Los ingredientes impares son: (ingredientes en array impares)." */


function Pizza(ingPizza) {
    let ingPares = [];
    let ingImpares = [];

    for (let i of ingPizza) {
        let cantidadDeLetras = i;
        if (cantidadDeLetras.length % 2 === 0) {
            ingPares.push(cantidadDeLetras);
        } else {
            ingImpares.push(cantidadDeLetras);
        }
    }
    console.log("Los Ingredientes pares son:" + ingPares)
    console.log("Los ingredientes impraes son:" + ingImpares)
}    
Pizza(ingPizza);