import { IsNotEmpty, isEmail, IsEmail } from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;

    @IsNotEmpty()
    readonly registration_device: string;

    @IsNotEmpty()
    readonly app_id: string
}

export class LoginUserDTO {
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;

    @IsNotEmpty()
    readonly app_id: string
}