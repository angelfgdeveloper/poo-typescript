import axios from 'axios';

import { ProductService } from '../models/product-service.model';
import { Product } from '../models/product.model';

import { UpdateProductDto, CreateProductDto } from '../dtos/product.dto';

export class ProductHttpService implements ProductService {

  private static instance: ProductHttpService | null = null;
  private url = 'https://api.escuelajs.co/api/v1/products';

  private constructor() {}

  public static getIntance(): ProductHttpService {
    if (ProductHttpService.instance === null) {
      ProductHttpService.instance = new ProductHttpService();
    }

    return ProductHttpService.instance;
  }


  async getAll(): Promise<Product[]> {
    const { data } = await axios.get(this.url);
    return data;
  }

  // Dejar inferir los metodos de retorno es quitar lo que va a devolver la funcion
  // he internamente mandarle el tipado
  async update(id: Product['id'], changes: UpdateProductDto)/*: Promise<Product>*/ {
    const { data } = await axios.put<Product>(`${ this.url }/${ id }`, changes);
    return data;
  }

  async create(dto: CreateProductDto) {
    const { data } = await axios.post<Product>(this.url, dto);
    return data;
  }

  async findOne(id: Product['id']) {
    const { data } = await axios.get<Product>(`${ this.url }/${ id }`);
    return data;
  }

}
