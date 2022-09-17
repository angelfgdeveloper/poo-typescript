import axios from 'axios';

import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';

// #1 PARA GENERICOS
// Generico en clases
export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];

  constructor(
    protected url: string
  ) {}

  // getAll(): TypeClass[] | Promise<TypeClass[]> {
  //   return [];
  // }

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  // async update<TypeMethod>(id: TypeMethod, changes: unknown) {
  //   // const array: TypeClass[] = []; // Cuidar que no chequen los nombre de metodos con la clase
  //   const { data } = await axios.put<Product>(`${ this.url }/${ id }`, changes);
  //   return data;
  // }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put<Product>(`${ this.url }/${ id }`, changes);
    return data;
  }
}

// Dinamicamente cambia el tipado en las clases
// const service = new BaseHttpService<string>();
// // service.data;
// service.getAll();

// const service1 = new BaseHttpService<number>();
// service1.getAll();

// const categories = new BaseHttpService<Category>();
// categories.getAll();

(async() => {
  // Products usando clases genericas
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);

  const rta = await productService.getAll();
  console.log('products', rta.length);

  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'Producto 111',
    description: 'description 123'
  });

  // Categories usando clases genericas
  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);

  const rta2 = await categoryService.getAll();
  console.log('categories', rta2.length);
  // categoryService.update<Category['id'], UpdateCategoryDto>(1, {
  //   title: 'Producto 111'
  // });

})();
