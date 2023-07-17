import { Validators } from "@angular/forms";

export const nomeValidator = Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(20),
    Validators.pattern(/^[A-Za-z]+$/),
]);

export const cognomeValidator = Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(20),
    Validators.pattern(/^[A-Za-z]+$/),
]);

export const emailValidator = Validators.compose([
    Validators.required,
    Validators.email,
]);