import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';


const BASE_URL="http://localhost:6969/auth";


@Injectable({
  providedIn: 'root'
})

export class SignupService {

  constructor(private http : HttpClient) { }

  registerUser(user: User): Observable<Object>{
      return this.http.post(BASE_URL+"/register",user);
  }

}
