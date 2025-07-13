import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Count } from '../Interfaces/count';

const apiUrl = 'https://ktuqr1ij83.execute-api.us-east-1.amazonaws.com/stage/visitorcount';

@Injectable({
  providedIn: 'root'
})
export class VisitorCountService {

  private readonly http = inject(HttpClient); //inject http client from provider in config

  getVisitorCount(): Observable<Count> {
    return this.http.get<Count>(apiUrl);
  }
}
