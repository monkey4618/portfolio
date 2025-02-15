import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../shared/component/header/header.component";
import { FormGroup , FormControl, ReactiveFormsModule, SelectControlValueAccessor } from '@angular/forms';
import { MailService } from '../../shared/services/mail.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [MailService]
})
export class HomeComponent {
  mailForm = new FormGroup({
    fullName: new FormControl(''),
    mail: new FormControl(''),
    message: new FormControl('')
  });

  private readonly mailService = inject(MailService);

  onSubmitMail(): void {
    const mailData = this.mailForm.value;
    console.log(mailData);
    this.mailService.sendMail(mailData as {fullName: string, mail: string, message: string})
    .then(() => {
      console.warn("Success");
    }).catch(err => console.error(err))
  }
}
