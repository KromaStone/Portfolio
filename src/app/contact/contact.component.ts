import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  ngOnInit() {

  }

  // false = 0
  // true = 1
  // clear = 2

  succes: number = 2;
  resaponseMessage: string = '';

  responseHnadlerSuucess() {
    this.resaponseMessage='Message has been sent.'
    this.succes = 1
    setTimeout(() => {
      this.removeMesasge()
    }, 4000);
  }
  responseHnadlerFail() {
    this.resaponseMessage='Message has not sent.'
    this.succes = 0
    setTimeout(() => {
      this.removeMesasge()
    }, 4000);
  }

  removeMesasge() {
    this.succes = 2;
  }
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_6q1df7x', 'template_gu3v7mr', e.target as HTMLFormElement, {
        publicKey: 'MS8vHLNZ7NDs7ASYp',
      })
      .then(
        () => {
          this.responseHnadlerSuucess()
        },
        (error) => {
          this.responseHnadlerFail();
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
