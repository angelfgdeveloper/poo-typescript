// Ejecutar con npx ts-node src/nombreArchivo.ts

console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1,2,2,8,1,4,5)); // Cual número es mayor => 8

class MyMath {

  // Previene cambiar el valor static con el readonly
  // readonly => Solo lectura
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    // return numbers[0];
    return numbers.reduce((max, item) => max >= item ? max: item);
    // Quitar el valor minimo 0 para que pueda leer tambien los numeros negativos
    // return numbers.reduce((max, item) => max >= item ? max: item, 0);
  }

}

// const math = new MyMath();
// math.PI;

console.log('MyMath.PI =>', MyMath.PI);
// No permite tener 0 iniciales 008
console.log('MyMath.max =>', MyMath.max(1, 156, 3, 8));
const numbers = [1, 156, 3, 8, 845, 65, 87];
console.log('MyMath.max =>', MyMath.max(...numbers)); // res => 845


console.log('MyMath.max =>', MyMath.max(-1, -9, -2)); // res => -1



