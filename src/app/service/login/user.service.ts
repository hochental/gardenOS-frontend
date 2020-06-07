import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../entity/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  getUserLogged():Observable<User>{
    return this.http.get<User>(this.BASE_URL+"activeuser");
  }
}
