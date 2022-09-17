import axios from 'axios';
import { Product } from './models/product.model';

// Puedo asignar un numero a un boolean con any
// let anyVar: any = 12;
// let boolVar: boolean = anyVar;

// Para evitar el primer comportamiento usar unknown
// let anyVar: unknown = 12;
// let boolVar: boolean = anyVar; // Error => hacer el tipado if

(async () => {  // Funcion anonima auto ejecutable

  // Retorna la data ya establecida

  // #1 Desventaja al tipar hacia afuera si usamos el tipado a dentro
  // #2 Manera correcta con tipado afuera y dentro axios.get<Product[]>
  async function getProducts() /*: Promise<Product[]> */ {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    // data.map(item => `${ item.id } - ${ item.title }`);
    return data;
  }

  // Forzar tipado
  // async function getProducts() {
  //   const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
  //   const data = rta.data as Product[]; // castear si la libreria no soporta el tipado ejemplo
  //   // axios.get<Product[]>
  //   return data;
  // }

  const products = await getProducts();
  console.log(products.map(item => `${ item.id } - ${ item.title }`));

})();
