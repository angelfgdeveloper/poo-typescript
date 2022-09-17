// class-validator si es minuscula es una funcion (isEmail), sino es un decorador (IsEmail)
import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validate, validateOrReject } from 'class-validator';
// Se deben habilitar los decoradores en el tsconfig.json
// "experimentalDecorators": true

import { AccessType, Category } from '../models/category.model';

// I para interface
export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {

  // Decoradores
  @IsNotEmpty()
  @Length(4, 140)
  name!:  string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  acceso?: AccessType | undefined;

}

(async() => {

  try {
    const dto = new CreateCategoryDto();
    // Cumple con la regla de los decoradores
    dto.name = 'abc-123';
    dto.image = 'https://api.escuelajs.co/api/v1/categories';

    // await validate(dto);
    await validateOrReject(dto); // Para atraparlo en un try-catch

  } catch (error) {
    console.log(error);
  }

})();
