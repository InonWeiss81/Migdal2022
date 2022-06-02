import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Dropdown } from 'src/app/data/dropdown';
import { Insured } from 'src/app/interfaces/i-process';
import { IProcessInfoTexts } from 'src/app/interfaces/i_process-info-texts';
import { FieldsDataService } from 'src/app/services/fields-data.service';
import { TextService } from 'src/app/services/texts.service';
import { ContactTypeExistance } from '../shared/custom-validators/contact-type.validator';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-process-info',
  templateUrl: './process-info.component.html',
  styleUrls: ['./process-info.component.scss']
})
export class ProcessInfoComponent implements OnInit, OnDestroy {

  texts!: IProcessInfoTexts;
  fieldsData!: Insured;

  dropdown = new Dropdown();

  injuryTypeEnabled: boolean = false;

  formValiditySub: Subscription | undefined;

  @Output() formValidity: EventEmitter<boolean> = new EventEmitter<boolean>();

  processInfoForm = this.formBuilder.group({
    superClaimType: ['', Validators.required],
    claimCause: ['', Validators.required],
    submitedBy: ['', [Validators.required, ContactTypeExistance(this.fieldsDataService.Data.contactPersons)]],
    eventDate: ['', Validators.required],
    injuryType: [{ value: '', disabled: !this.injuryTypeEnabled }, Validators.required],
    submitionMethod: [''],
  });


  ngOnInit(): void {
    this.texts = this.textService.ProcessInfoComponent;
    this.fieldsData = this.fieldsDataService.Data.insured;

    this.formValiditySub = this.processInfoForm.statusChanges
      .pipe(
        filter(() => this.processInfoForm.valid))
      .subscribe(() => this.onFormValid());

      this.formValiditySub = this.processInfoForm.statusChanges
      .pipe(
        filter(() => this.processInfoForm.invalid))
      .subscribe(() => this.onFormInvalid());

  }

  claimCauseChanged() {
    if (this.claimCause?.valid) {
      this.injuryTypeEnabled = true;
      this.injuryType?.enable({ onlySelf: true, emitEvent: false });
    }
    else {
      this.injuryTypeEnabled = false;
      this.injuryType?.disable({ onlySelf: true, emitEvent: false });
    }
  }

  onFormValid() {
    this.formValidity.emit(true);
  }

  onFormInvalid() {
    this.formValidity.emit(false);
  }


  // getters
  public get superClaimType() {
    return this.processInfoForm.get('superClaimType');
  }
  public get claimCause() {
    return this.processInfoForm.get('claimCause');
  }
  public get submitedBy() {
    return this.processInfoForm.get('submitedBy');
  }
  public get eventDate() {
    return this.processInfoForm.get('eventDate');
  }
  public get injuryType() {
    return this.processInfoForm.get('injuryType');
  }
  public get submitionMethod() {
    return this.processInfoForm.get('submitionMethod');
  }

  ngOnDestroy() {
    this.formValiditySub?.unsubscribe();
  }


  constructor(private textService: TextService, private fieldsDataService: FieldsDataService,
    private formBuilder: FormBuilder) { }

}
