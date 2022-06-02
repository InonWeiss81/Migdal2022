import { Injectable } from "@angular/core";
import { IAppMainTexts } from "../interfaces/i_app-main-texts";
import { IContactsAssemblyTexts } from "../interfaces/i_contacts-assembly-texts";
import { IContactsTexts } from "../interfaces/i_contacts-texts";
import { IProcessInfoTexts } from "../interfaces/i_process-info-texts";

@Injectable({ providedIn: 'root' })
export class TextService {

    public AppMainComponent: IAppMainTexts = {
        Claim: 'תביעת על',
        ClaimStatus: 'מצב תביעה',
        RefreshProcess: 'רענון תהליך',
        Continue: 'המשך'
    }

    public ProcessInfoComponent: IProcessInfoTexts = {
        Address: 'כתובת',
        Age: 'גיל',
        ClaimCause: 'סיבת אירוע',
        CustomerDetails: 'פרטי מבוטח',
        EventDate: 'תאריך אירוע',
        InjuryType: 'מהות אירוע',
        Name: 'שם',
        PersonalId: 'ת.ז',
        SubmitedBy: 'תביעה הוגשה באמצעות',
        SubmitionMethod: 'אופן קבלת התביעה',
        SuperClaimType: 'סוג תביעת על',
        Title: 'ריכוז מידע בתהליך',
        Select: 'בחר',
        SelectClaimCause: 'נא לבחור סיבת אירוע'
    }

    public ContactsAssemblyComponent: IContactsAssemblyTexts = {
        AddCustomer: 'הוספת מבוטח',
        ContactsInProcess: 'מספר אנשי קשר בתהליך',
        ContactsReset: 'איפוס אנשי קשר',
        PossibleActions: 'פעולות אפשריות',
        Title: 'ריכוז אנשי קשר',
        TotalReset: 'איפוס מלא'
    }

    public ContactsComponent: IContactsTexts = {
        AddContact: 'הוסף איש קשר',
        Address: 'כתובת',
        ContactName: 'שם איש קשר',
        Email: 'דוא"ל',
        Favorite: 'מועדף',
        Phone: 'טלפון נייד',
        Title: 'אנשי קשר',
        Type: 'סוג',
        Select: 'בחר',
        HebrewLettersOnly: 'עברית בלבד',
        NumbersOnly10Digits: '10 ספרות בלבד',
        SaveContact: 'שמור איש קשר',
        UnexpectedError: 'אירעה שגיאה בלתי צפויה, אנא פנה למפתח האתר',
        CheckFormsError: 'בדוק שגיאות בטופס'
    }
}