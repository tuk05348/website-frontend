import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus} from '@emailjs/browser'
import { ContactForm } from '../Interfaces/contact-form';

const serviceId = 'contact_service';
const templateId = 'email_template';
const myPublicKey = 'y8gA-9cIn9qNDtzid';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  sendEmail(formData: ContactForm) {
    emailjs.sendForm(serviceId, templateId, JSON.stringify(formData), {
      publicKey: myPublicKey,
    })
    .then(
      () => {
        console.log('Success!');
        return true;
      },
      (error) => {
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
        return false;
      }
    )
  }
}
