import { Component } from '@angular/core';
import { BioService } from '../Services/bio.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private bioService: BioService) {}

  bio: string = ''; 

  ngOnInit() {
    this.bio = localStorage.getItem('bio') || '';

    this.bioService.getBio().subscribe(
      data => {
        this.bio = data.bio;
      }
    )
  }

}
