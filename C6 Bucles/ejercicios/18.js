function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if (a > b) {
    let producto = 0;
    for (let i = b; i <= a; i++) {
      producto *= i;
    }
  } else {
    let producto = 0;
    for (let i = a; i <= b; i++) {
      producto *= i;
    }
  }

}

module.exports = productoEntreNúmeros;