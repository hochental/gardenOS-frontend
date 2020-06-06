import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Adress} from '../entity/adress';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  private adressUrl: string;

  constructor(private http: HttpClient) {
    this.adressUrl = 'http://localhost:8080/rest';
  }

  public findAll(): Observable<Adress[]> {
    return this.http.get<Adress[]>(this.adressUrl+'/all/adresses');
  }

  save(newAdres: Adress) {
    return this.http.post(this.adressUrl+'/adress',newAdres)
  }
}
