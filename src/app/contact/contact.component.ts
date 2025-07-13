import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, {type EmailJSResponseStatus } from '@emailjs/browser';

const serviceId: string = 'contact_service';
const templateId: string = 'email_template';
const myPublicKey: string = 'y8gA-9cIn9qNDtzid';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formSubmitted: boolean = false; //member to track whether form has been successfully submitted
  formSuccess: boolean = false;
  formError: boolean = false;
  characterLimit: number = 500;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.maxLength(this.characterLimit)]) 
  })

  //getters to get form controls from the form group
  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  onSubmit(e: Event) {
    if(this.contactForm.valid) {
      this.formSubmitted = true;
      emailjs.sendForm(serviceId, templateId, e.target as HTMLFormElement, {
        publicKey: myPublicKey,
      })
      .then(
        () => {
          console.log('Success!');
          this.formSuccess = true;
        },
        (error) => {
          console.log('Failed ...', (error as EmailJSResponseStatus).text);
          this.formError = true;
        },
      );
    }
  }

}
