import { AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Dropdown } from 'src/app/data/dropdown';
import { ContactPerson } from 'src/app/interfaces/i-process';
import { IContactsTexts } from 'src/app/interfaces/i_contacts-texts';
import { FieldsDataService } from 'src/app/services/fields-data.service';
import { TextService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

  texts!: IContactsTexts;
  data!: ContactPerson[];
  contactsCountSub: Subscription | undefined;
  isAddContact: boolean = false;
  newContactsForm!: FormGroup;
  newContactsFormValid: boolean = false;

  dropdown = new Dropdown();

  colWidths: number[] = [];

  @ViewChild('contactsHeaderRow') contactsHeaderRow!: ElementRef<HTMLTableRowElement>;
  @ViewChild('contactsFormRow') contactsFormRow!: ElementRef<HTMLTableRowElement>;


  ngOnInit(): void {
    this.texts = this.textService.ContactsComponent;
    this.updateData();
    this.contactsCountSub = this.fieldsDataService.ContactsCount.subscribe(
      () => {
        this.updateData();
      }
    );
    this.initializeForm();
    this.newContactsForm.statusChanges
      .pipe(
        filter(() => this.newContactsForm.valid))
      .subscribe(() => this.onFormValid());

    this.newContactsForm.statusChanges
      .pipe(
        filter(() => this.newContactsForm.invalid))
      .subscribe(() => this.onFormInvalid());
  }

  onFormValid() {
    this.newContactsFormValid = true;
  }

  onFormInvalid() {
    this.newContactsFormValid = false;
  }

  updateData() {
    this.data = this.fieldsDataService.Data.contactPersons;
  }

  initializeForm() {
    this.newContactsForm = this.formBuilder.group({
      deliveryFlag: false,
      name: ['', [Validators.required, Validators.pattern(/^[א-ת\s]*$/)]],
      type: ['', Validators.required],
      address: [''],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', Validators.email]
    });
  }

  ngAfterViewInit(): void {
    this.getRowWidths();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getRowWidths();
  }

  getRowWidths() {
    this.colWidths = [];
    let thCount = this.contactsHeaderRow.nativeElement.childElementCount;
    for (let i = 0; i < thCount; i++) {
      const element = this.contactsHeaderRow.nativeElement.childNodes[i];
      this.colWidths.push((element as HTMLTableCellElement).clientWidth)
    }
  }

  addContact() {
    if (this.isAddContact) {
      this.closeAddContact();
      return;
    }
    this.isAddContact = true;
  }

  setFormColWidths() {
    for (let i = 0; i < this.colWidths.length; i++) {
      (this.contactsFormRow.nativeElement.childNodes[i] as HTMLTableCellElement).style.width = this.colWidths[i].toString() + 'px';
    }
  }

  closeAddContact() {
    this.isAddContact = false;
  }

  saveContact() {
    if (!this.newContactsFormValid) {
      return;
    }
    let typeCode = this.type?.value;
    let typeValue = this.dropdown.contactPersonType.find(x => x.code == typeCode)?.value;
    if (!typeValue) {
      alert(this.texts.UnexpectedError);
      return;
    }
    let contactPerson: ContactPerson = {
      address: this.address?.value,
      deliveryFlag: this.deliveryFlag?.value,
      email: this.email?.value,
      id: 0,
      name: this.name?.value,
      phoneNumber: this.phoneNumber?.value,
      type: { code: typeCode, value: typeValue }
    }
    this.fieldsDataService.addContact(contactPerson);
    this.newContactsForm.reset();
    this.isAddContact = false;
  }


  // getters
  public get deliveryFlag() {
    return this.newContactsForm.get('deliveryFlag');
  }
  public get name() {
    return this.newContactsForm.get('name');
  }
  public get type() {
    return this.newContactsForm.get('type');
  }
  public get address() {
    return this.newContactsForm.get('address');
  }
  public get phoneNumber() {
    return this.newContactsForm.get('phoneNumber');
  }
  public get email() {
    return this.newContactsForm.get('email');
  }

  ngOnDestroy(): void {
    this.contactsCountSub?.unsubscribe();
  }

  constructor(private textService: TextService, private fieldsDataService: FieldsDataService,
    private formBuilder: FormBuilder) { }
  
}
