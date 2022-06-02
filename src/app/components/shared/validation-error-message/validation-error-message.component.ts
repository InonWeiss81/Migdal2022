import { Component, Input } from '@angular/core';

@Component({
  selector: 'validation-error-message',
  templateUrl: './validation-error-message.component.html',
  styleUrls: ['./validation-error-message.component.scss']
})
export class ValidationErrorMessageComponent {

  requiredFieldTxt: string = 'שדה חובה';
  contactTypeNotFoundTxt: string = 'לא נמצאו אנשי קשר מהסוג הנבחר';
  invalidDataTxt: string = 'נתון לא תקין';
  invalidEmailTxt: string = 'כתובת דוא"ל לא חוקית';

  @Input() element: any;

  constructor() {

   }

}
