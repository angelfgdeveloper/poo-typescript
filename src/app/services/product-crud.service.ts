import { BaseHttpService } from './base-http.service';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';
import { ProductHttpService } from './product-http2.service';
import { validate } from 'class-validator';

// #3 PARA GENERICOS CON EXTENSION
export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  // private http = new BaseHttpService<Product>(this.url);

  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    // permisos
    // logica
    // validate(dto) // Forma de validar la integridad de los datos
    return this.http.update(id, dto);
  }
}
