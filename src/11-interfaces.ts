// Lo importante es cumplir con el contrato en n clases
export interface Driver {
  database: string;
  password: string;
  port: number;
  local?: number; // Datos default => no requeridos en el contrato

  // Metodos en interfas
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23,
// }

// Usar interfaces con implements
class PostgresDriver implements Driver {

  // Añade los datos que requiere del contrato
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number,
  ) {}

  connect(): void {
    // Code
  }

  disconnect(): void {
    // Code
  }

  isConnected(name: string): boolean {
    // Code
    return true;
  }

}

// Usar interfaces con implements
class OracleDriver implements Driver {

  // Añade los datos que requiere del contrato
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ) {}

  connect(): void {
    // Code
  }

  disconnect(): void {
    // Code
  }
  isConnected(name: string): boolean {
    // Code
    return true;
  }


}
