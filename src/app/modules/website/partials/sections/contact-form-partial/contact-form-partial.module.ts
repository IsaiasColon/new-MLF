import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormPartialComponent } from 'src/app/modules/website/partials/sections/contact-form-partial/contact-form-partial.component';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [ContactFormPartialComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxLoadingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  exports: [ContactFormPartialComponent],
})
export class ContactFormPartialModule {}
