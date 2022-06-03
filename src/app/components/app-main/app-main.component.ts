import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProcess } from 'src/app/interfaces/i-process';
import { IAppMainTexts } from 'src/app/interfaces/i_app-main-texts';
import { AppMainService } from 'src/app/services/app-main.service';
import { ContactsService } from 'src/app/services/contacts.service';
import { FieldsDataService } from 'src/app/services/fields-data.service';
import { TextService } from 'src/app/services/texts.service';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit, AfterViewInit {

  texts!: IAppMainTexts;
  fieldsData!: IProcess["superClaim"];
  isValidProcessInfoForm: boolean = false;
  isValidContactsInfo: boolean = false;

  warningData:string = 'נדרש למלא נתונים תקינים על מנת להמשיך';
  showWarningSign: boolean = true;

  @ViewChild('continueBtn') continueBtn: ElementRef | undefined;

  ngOnInit(): void {
    this.texts = this.textService.AppMainComponent;
    this.fieldsData = this.fieldsDataService.Data.superClaim;
    this.contactsFavoritesService.IsContactsFavoritesValid.subscribe(
      valid => {
        this.setContinueBtnFromContactsInfo(valid);
      }
    )
  }

  ngAfterViewInit(): void {
    if (this.continueBtn) {
      (this.continueBtn.nativeElement as HTMLButtonElement).disabled = true;
      (this.continueBtn.nativeElement as HTMLButtonElement).onclick = () =>  { this.submitForm() };
    }
  }

  setContinueBtnFromProcessInfo(isValidProcessInfoForm: boolean) {
    this.isValidProcessInfoForm = isValidProcessInfoForm;
    this.updateContinueBtn();
  }

  setContinueBtnFromContactsInfo(isValidContactsInfo: boolean) {
    this.isValidContactsInfo = isValidContactsInfo;
    this.updateContinueBtn();
  }

  updateContinueBtn() {
    if (this.continueBtn) {
      this.showWarningSign = !this.isValidProcessInfoForm || !this.isValidContactsInfo;
      (this.continueBtn.nativeElement as HTMLButtonElement).disabled = this.showWarningSign;

      if (this.showWarningSign) {
        this.warningData = !this.isValidProcessInfoForm 
          ? 'קיימות שגיאות בחלק "ריכוז מידע בתהליך"'
          : 'חייב להיות לפחות איש קשר אחד מועדף';
      }
    }
  }

  refreshProcessClicked() {
    this.appMainService.refreshProcess();
  }

  submitForm() {
    console.log(this.appMainService.processInfoForm);
  }

  constructor(private textService: TextService, private fieldsDataService: FieldsDataService,
    private contactsFavoritesService :ContactsService, private appMainService: AppMainService) { }
  

}
