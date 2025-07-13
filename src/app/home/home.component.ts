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
    this.bio = localStorage.getItem('bio') || ''; //set bio to bio in local storage, if null, set to empty string

    this.bioService.getBio().subscribe( //subscribe to bio service
      data => { //set bio to bio returned from api service
        this.bio = data.bio;
        localStorage.setItem('bio', data.bio); //save bio in local storage
      }
    );
  }

}
