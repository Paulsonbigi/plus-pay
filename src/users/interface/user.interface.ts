export interface userRegisterInterface  {
        email: string;
        password: string;
        registration_device: string;
        app_id: string;
}

export interface userLoginInterface  {
    email: string;
    password: string;
    app_id: string;
}

export interface UserSecondRegistrationInterface {
    first_name: string,
    last_name: string;
    street: string;
    lga: string;
    state: string;
    phone_number: string;
    country: string;
    region?: string;

}