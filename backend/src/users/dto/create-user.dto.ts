import {
  IsEmail,
  IsAlphanumeric,
  isByteLength,
  IsByteLength,
  IsEmpty,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsAlphanumeric()
  @IsByteLength(6)
  password: string;
}
