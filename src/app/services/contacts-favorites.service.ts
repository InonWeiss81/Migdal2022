import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FieldsDataService } from "./fields-data.service";

@Injectable({providedIn: 'root'})
export class ContactsFavoritesService {
    IsContactsFavoritesValid: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    updateIsContactsFavoritesValid() {
        let isFavoritesValid: boolean = this.fieldsDataService.Data.contactPersons.some(x => x.deliveryFlag);
        this.IsContactsFavoritesValid.next(isFavoritesValid);
    }

    constructor(private fieldsDataService: FieldsDataService) {}
}