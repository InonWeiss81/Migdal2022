import { ContactsService } from 'src/app/services/contacts.service';
import { Component, OnInit } from '@angular/core';
import { ContactPerson, Insured } from 'src/app/interfaces/i-process';
import { IContactsAssemblyTexts } from 'src/app/interfaces/i_contacts-assembly-texts';
import { FieldsDataService } from 'src/app/services/fields-data.service';
import { TextService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-contacts-assembly',
  templateUrl: './contacts-assembly.component.html',
  styleUrls: ['./contacts-assembly.component.scss']
})
export class ContactsAssemblyComponent implements OnInit {

  texts!: IContactsAssemblyTexts;
  contactsCount: number = 0;

  ngOnInit(): void {
    this.texts = this.textService.ContactsAssemblyComponent;
    this.fieldsDataService.ContactsCount.subscribe(
      data => {
        this.contactsCount = data;
      }
    );
  }

  addCustomer() {
    let currentInsured: Insured = this.fieldsDataService.Data.insured;
    let newContact: ContactPerson = {
      address: currentInsured.address.cityName + ' ' + currentInsured.address.streetName,
      deliveryFlag: false,
      email: '',
      id: currentInsured.identity,
      name: currentInsured.firstName + ' ' + currentInsured.lastName,
      phoneNumber: 0,
      type: { code: 1, value: 'מבוטח' }
    }
    this.contactsService.contactToAdd = newContact;
    this.contactsService.AddContactFlag();
  }

  totalReset() {
    this.fieldsDataService.clearContacts();
  }

  contactsReset() {
    this.fieldsDataService.clearContacts(true);
  }


  constructor(private textService: TextService, private fieldsDataService: FieldsDataService,
    private contactsService: ContactsService) { }

}
