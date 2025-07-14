import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VisitorCountService } from '../../Services/visitor-count.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  menuOpen: boolean = false; //variable to track whether the hamburger menu on mobile/tablet is open

  count: string = '';

  constructor(private visitorCountService: VisitorCountService) {}

  ngOnInit() {
    this.count = localStorage.getItem('count') || ''; //set count to stored count in local storage
    this.visitorCountService.getVisitorCount().subscribe( //subscribe to observable on api
      data => {
        this.count = data['visitor-count'];
        localStorage.setItem('count', this.count);
      }
    )
  }
}
