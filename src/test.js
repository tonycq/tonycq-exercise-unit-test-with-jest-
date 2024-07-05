
const { sum } = require('../src/app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar,} = require('../src/app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dollar should be 156.5 yen", function() {
    
    const { fromDollarToYen } = require('../src/app.js');

    
    const yen = fromDollarToYen(1);


    const expected = 1 * (156.5 / 1.07);
  
    expect(yen).toBeCloseTo(expected);
});


test("One yen should be 0.0056 pounds", function() {

    const { fromYenToPound } = require('../src/app.js');

    const pounds = fromYenToPound(1);

    const expected = 1 * (0.87 / 156.5);
  
    expect(pounds).toBeCloseTo(expected);
});