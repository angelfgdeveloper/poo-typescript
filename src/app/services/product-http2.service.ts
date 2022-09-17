import { BaseHttpService } from './base-http.service';
import { Product } from '../models/product.model';

// Uso de generico con extension de clase padre BaseHttpService
// #2 PARA GENERICOS
export class ProductHttpService extends BaseHttpService<Product> {

  otroRequest() {
    this.url;
    // code // code
  }

}
