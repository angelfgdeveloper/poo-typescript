import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

// Regla de metodos
export interface ProductService {
  /**
   * Las interfaces se conocen como contratos
   * El retorno de las funciones se le conoce como la firma
   * Los parametros son los que se implementan en la funcion (lo que recibe)
   */
  getAll(): Product[] | Promise<Product[]>;
  update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
  create(dto: CreateProductDto): Product | Promise<Product>;
  findOne(dto: Product['id']): Product | undefined | Promise<Product | undefined>;
}
