import { Dog } from './09-protected';

// #1 manera para ejecutar el retorno con el tipado de esa variable
// no funcional
// function getValue(value: number | string) { /** number | string => union  */
//   return value;
// }

// #2 manera para retonar un tipado ya obligando a tiparlo
// function getValue(value: unknown) {
//   return value;
// }

// Generico con un tipo
// Generalmente encuentras el nombre del tipo como => T
function getValue<myType>(value: myType) {
  return value;
}

// Con dos tipados de generico
function getValue2<myType, myType2>(value: myType) {
  const array: myType2[] = [];
  return value;
}

// Infiere el tipo
// Explicito en el tipado
getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([1,2,3]).forEach(r => r);

const fifi = new Dog('fifi', 'angel')
getValue<Dog>(fifi).greeting();

// Ejemplos:
// Promise<boolean>
// axios.get<string[]>

// Con dos tipados
// getValue2<number, string>(12).toFixed();
