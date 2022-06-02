import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ContactPerson } from "src/app/interfaces/i-process";

export function ContactTypeExistance(contacts: ContactPerson[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isContactTypeValid = contacts.some(x => x.type.code == control.value);
        return isContactTypeValid ? null : { contactTypeInvalid: true };
    };
}