import { Pipe } from "@angular/core";

@Pipe({
  name: "phoneNumber"
})
export class PhoneNumberPipe {
  transform(number: string): string {
    let result: string = '';
    if (number.charAt(0) != '0') {
        number = '0' + number;
    }

    result = number.substring(0, 3) + '-' + number.substring(3);

    return result;
  }
}