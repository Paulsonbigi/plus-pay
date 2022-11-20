import { IsNotEmpty, isEmail, IsEmail, IsString, IsObject } from 'class-validator';

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

export class UserSecondRegistrationDTO {
    @IsNotEmpty()
    @IsString()
    readonly first_name: string;

    @IsNotEmpty()
    @IsString()
    readonly last_name: string;

    @IsNotEmpty()
    @IsString()
    readonly phone_number: string;

    @IsNotEmpty()
    @IsString()
    readonly street: string;

    @IsNotEmpty()
    @IsString()
    readonly lga: string;

    @IsNotEmpty()
    @IsString()
    readonly state: string;

    @IsNotEmpty()
    @IsString()
    readonly country: string;

    @IsNotEmpty()
    @IsString()
    readonly region: string;
}