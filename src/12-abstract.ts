import { Animal, Dog } from './09-protected';

// Con "abstract" no permite tener una instancia de la clase padre
// Siempre con la clase hija

// const animal = new Animal('elite');
// animal.greeting();

const dog = new Dog('cheis', 'angel');
dog.greeting();
dog.woof(2);

