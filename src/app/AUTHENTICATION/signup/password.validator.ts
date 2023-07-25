import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ConfirmPasswordValidator {
    /**
     * Check matching password with confirm password
     * @param control AbstractControl
     */
    static MatchPassword(control: AbstractControl):ValidationErrors | null {
        const password = control.get('password')?.value;

        const confirmPassword = control.get('confirmPassword')?.value;

        if (password !== confirmPassword) {
            control.get('confirmPassword')?.setErrors({confirmPassword: true});
            return { mismatch: true };
        } else {
            return null;
        }
    }
}