import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Adress} from '../entity/adress';
import {Client} from '../entity/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientUrl: string;

  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/rest';
  }

  public findById(clientId: number): Observable<Client>{
    return this.http.get<Client>(this.clientUrl+'/client/'+clientId);
  }

  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl+'/all/clients');
  }

  public save(client: Client) {
    return this.http.post<Client>(this.clientUrl+'/client', client)
  }
}
