import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProcess } from 'src/app/interfaces/i-process';
import { IAppMainTexts } from 'src/app/interfaces/i_app-main-texts';
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

  form: any;

  @ViewChild('continueBtn') continueBtn: ElementRef | undefined;

  ngOnInit(): void {
    this.texts = this.textService.AppMainComponent;
    this.fieldsData = this.fieldsDataService.Data.superClaim;
    this.form = 1;
  }

  ngAfterViewInit(): void {
    if (this.continueBtn) {
      (this.continueBtn.nativeElement as HTMLButtonElement).disabled = true;
      (this.continueBtn.nativeElement as HTMLButtonElement).onclick = () =>  { this.submitForm() };
    }
  }

  setContinueBtn(isValid: boolean) {
    if (this.continueBtn) {
      (this.continueBtn.nativeElement as HTMLButtonElement).disabled = !isValid;
    }
  }

  submitForm() {
    console.log(this.form);
  }

  constructor(private textService: TextService, private fieldsDataService: FieldsDataService) { }
  

}
