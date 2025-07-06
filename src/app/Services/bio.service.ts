import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/user';
import { HttpClient } from '@angular/common/http';

const url = 'https://api.github.com/users/tuk05348';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  private readonly http = inject(HttpClient);

  getBio(): Observable<User> {
    return this.http.get<User>(url);
  }
}
