// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))


// Declaramos  función  formEuroToDollar
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos  función  fromDollarToYen
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYen = valueInDollar * (156.5 / 1.07);
    // Retornamos el valor en yenes
    return valueInYen;
}


// Declaramos  función  fromYenToPound
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libras
    let valueInPound = valueInYen * (0.87 / 156.5);
    // Retornamos el valor en libras
    return valueInPound;
}

module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound };