export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(
    name: string, // propiedad heredada
    public owner: string
  ) {
    super(name);
  }

  woof(times: number = 0): void {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

// Clase heredada
const cheis = new Dog('cheis', 'angel');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
console.log(cheis.owner);

// Ejecutar con npx ts-node src/nombreArchivo.ts
