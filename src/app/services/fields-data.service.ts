import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ContactPerson, IProcess } from "../interfaces/i-process";

@Injectable({ providedIn: 'root' })
export class FieldsDataService {

    private contactsCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    private data: IProcess = {
        superClaim: {
            superClaimNum: 500038313,
            superClaimStatus: {
                code: 1,
                value: 'פתוחה'
            }
        },
        insured: {
            address: {
                cityName: 'רעננה',
                streetName: 'אחוזה'
            },
            age: 35,
            firstName: 'מריה',
            identity: 7854122156,
            identityType: 2,
            lastName: "ג'יין"
        },
        contactPersons: [
            {
                address: 'רחובות אופנהיימר',
                deliveryFlag: false,
                email: 'NIKITA_JAIN@AMAT.COM',
                id: 1,
                name: "ניקיטה ג'יין",
                phoneNumber: 525816206,
                type: {
                    code: 1,
                    value: 'מבוטח'
                }
            },
            {
                address: 'מחנה תל נוף',
                deliveryFlag: true,
                email: '',
                id: 2,
                name: "טוביה בצקי",
                phoneNumber: 525452203,
                type: {
                    code: 2,
                    value: 'סוכן'
                }
            }
        ]
    }

    private UpdateContactsCount() {
        this.contactsCount.next(this.data.contactPersons.length);
    }

    public get ContactsCount(): BehaviorSubject<number> {
        return this.contactsCount;
    }
 
    public get Data() : IProcess {
        return this.data;
    }
    
    addContact(contact: ContactPerson): void {
        this.data.contactPersons.push(contact);
        this.UpdateContactsCount();
    }

    clearContacts(leaveFavorites: boolean = false) {
        if (leaveFavorites) {
            this.data.contactPersons = this.data.contactPersons.filter(x => x.type.value == 'מבוטח' && x.deliveryFlag);
        }
        else {
            this.data.contactPersons = [];
        }        
        this.UpdateContactsCount();
    }


    constructor() {
        this.UpdateContactsCount();
    }
}