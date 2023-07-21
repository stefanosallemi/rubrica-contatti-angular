// validators.ts
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function nomeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!value) {
      return { required: { message: 'Nome è richiesto' } };
    }
    if (value.length < 2) {
      return { minlength: { message: 'Nome deve contenere almeno 2 caratteri' } };
    }
    if (value.length > 20) {
      return { maxlength: { message: 'Nome non può superare i 20 caratteri' } };
    }
    if (!/^[A-Za-z ]*$/.test(value)) {
      return { pattern: { message: 'Nome può contenere solo lettere' } };
    }
    return null;
  };
}

export function cognomeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!value) {
      return { required: { message: 'Cognome è richiesto' } };
    }
    if (value.length < 2) {
      return { minlength: { message: 'Cognome deve contenere almeno 2 caratteri' } };
    }
    if (value.length > 20) {
      return { maxlength: { message: 'Cognome non può superare i 20 caratteri' } };
    }
    if (!/^[A-Za-z ]*$/.test(value)) {
      return { pattern: { message: 'Cognome può contenere solo lettere' } };
    }
    return null;
  };
}

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!value) {
      return { required: { message: 'Email è richiesta' } };
    }
    if (!Validators.email(control)) {
      return { email: { message: 'Email non è valida' } };
    }
    return null;
  };
}
