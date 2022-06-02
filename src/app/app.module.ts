import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { ProcessInfoComponent } from './components/process-info/process-info.component';
import { ContactsAssemblyComponent } from './components/contacts-assembly/contacts-assembly.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorMessageComponent } from './components/shared/validation-error-message/validation-error-message.component';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { NgInitDirective } from './directives/init.directive';
import { ModalComponent } from './components/shared/modal/modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    ProcessInfoComponent,
    ContactsAssemblyComponent,
    ContactsComponent,
    ValidationErrorMessageComponent,
    PhoneNumberPipe,
    NgInitDirective,
    ModalComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
