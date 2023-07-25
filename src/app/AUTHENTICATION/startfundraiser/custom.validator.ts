import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator for maximum word count
export function maxWordCountValidator(maxWords: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    if (!value) {
      return null; // If the value is empty, validation passes
    }
    const words = value.trim().split(/\s+/).length;
    if (words <= maxWords) {
      return null; // Validation passed
    } else {
      return { maxWordCount: true }; // Validation failed
    }
  };
}

// Custom validator for maximum number count
export function maxNumberCountValidator(maxNumbers: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    if (!value) {
      return null; // If the value is empty, validation passes
    }
    const numbers = value.replace(/\D/g, '').length;
    if (numbers <= maxNumbers) {
      return null; // Validation passed
    } else {
      return { maxNumberCount: true }; // Validation failed
    }
  };
}
