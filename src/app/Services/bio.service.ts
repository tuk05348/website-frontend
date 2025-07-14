import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/user';
import { HttpClient } from '@angular/common/http';

const url = 'https://api.github.com/users/tuk05348';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  private readonly http = inject(HttpClient); //inject http client from provider in config

  getBio(): Observable<User> { //get bio from github api, returns an observable of type user
    return this.http.get<User>(url); //get user bio from api
  }
}
