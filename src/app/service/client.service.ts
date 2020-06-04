import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Adress} from '../entity/adress';
import {Client} from '../entity/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/rest';
  }

  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.usersUrl+'/all/clients');
  }
}
