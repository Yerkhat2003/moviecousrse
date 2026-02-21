import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Email не может быть пустым' })
  @IsEmail({}, { message: 'Некорректный email' })
  email: string;

  @IsOptional()
  @IsString({ message: 'Name должен быть строкой' })
  name?: string;
}
