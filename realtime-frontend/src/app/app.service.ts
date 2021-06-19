import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = 'http://localhost/api';
  constructor(private http: HttpClient) { }

  getDashboardUrl() {
    return this.http.get(`${this.baseUrl}/dashboard`);
  }
}
