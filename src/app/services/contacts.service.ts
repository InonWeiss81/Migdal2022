import { ContactPerson } from './../interfaces/i-process';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FieldsDataService } from "./fields-data.service";

@Injectable({providedIn: 'root'})
export class ContactsService {
    IsContactsFavoritesValid: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    addContactFlag: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    contactToAdd: ContactPerson | undefined;

    updateIsContactsFavoritesValid() {
        let isFavoritesValid: boolean = this.fieldsDataService.Data.contactPersons.some(x => x.deliveryFlag);
        this.IsContactsFavoritesValid.next(isFavoritesValid);
    }

    AddContactFlag() {
        this.addContactFlag.next(true);
    }

    constructor(private fieldsDataService: FieldsDataService) {}
}