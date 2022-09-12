export abstract class Animal {
  // Solo se puede usar de forma interna, y se puede heredar
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello I'm ${this.name}`;
  }

  // Que desde instancias no puedan acceder
  // Solo en herencia
  protected doSomething() {
    console.log(`dooo`);
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
      console.log(`woof! ${ this.name }`);
    }

    this.doSomething(); // podemos usarlo solo en herencias
  }

  move(): void {
    super.move(); // Llama al metodo padre heredado
    console.log(`moving as a dog`);
  }
}

// Clase heredada
const cheis = new Dog('cheis', 'angel');
// cheis.name = 'otro nombre'; // el protected ayuda a no usar esa variable para cambiar
cheis.woof(1);
cheis.move();
// cheis.doSomething();

// Ejecutar con npx ts-node src/nombreArchivo.ts
