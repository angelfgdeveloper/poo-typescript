export class MyService {

  // Creo mi instancia estatica
  static instance: MyService | null = null; // inicia en null

  private constructor(
    private name: string
  ) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    // Si la instancia esta null, creo una
    if (MyService.instance === null) {
      console.log('Debería entrar una vez');
      MyService.instance = new MyService(name);
    }

    // Sino esta null regreso la instancia
    return MyService.instance;
  }

}

const myService1 = MyService.create('service 1');
console.log(myService1.getName());

const myService2 = MyService.create('service 2');
console.log(myService2.getName());

const myService3 = MyService.create('service 3');
console.log(myService3.getName());

console.log(myService1 === myService2); // false => son diferentes instancias

// Singleton garantiza que no haya multiples instancias, sino una y la comparte atraves
// de toda la aplicacion

