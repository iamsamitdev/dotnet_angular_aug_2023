import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private hostUrl = environment.node_api_url;
  private apiUrl = `${this.hostUrl}/api/v1`;
  private loginUrl = `${this.apiUrl}/Auth/login`;
  private registerUrl = `${this.apiUrl}/Auth/register`;
  private productUrl = `${this.apiUrl}/product`;
  private transactionUrl = `${this.apiUrl}/transaction`;
  private reportTranUrl = `${this.transactionUrl}/report`;

  constructor(private http: HttpClient) {}

  public assets(image: string): string {
    return `/assets/${image}`;
  }

  public get isLoggedIn(): boolean {
    // return localStorage.getItem(environment.token) != null;
    return false;
  }

  public register(user: User) {
    return this.http.post('http://localhost:5168/api/v1/auth/register', user);
  }
}
