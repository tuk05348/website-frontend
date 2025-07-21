import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  private router = inject(Router); //inject router

  navigateToHome() { //go back to home page which has default root route
    this.router.navigateByUrl('');
  }

}
