const { suma } = require("./index");

function testSuma() {
  if (suma(2, 3) !== 5) {
    throw new Error("Error: suma incorrecta");
  }
}

function runTests() {
  testSuma();
  console.log("Todos los tests pasaron ✅");
}

runTests();
