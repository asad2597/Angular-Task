import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export class RegisterValidators {

    static match(controllName: string , matchingControllName: string): ValidatorFn{
        return (group: AbstractControl): ValidationErrors | null => {
            const control = group.get(controllName);
            const matchingControl = group.get(matchingControllName);

            if (!control || !matchingControl) {
                console.error('From controlls cannot be found inside the form group.')
                return { controlNotFound: false };
            }

            const error = control.value === matchingControl.value ?
                null :
                { noMatch: true };

            matchingControl.setErrors(error);
            return error;
        };
    }
}
