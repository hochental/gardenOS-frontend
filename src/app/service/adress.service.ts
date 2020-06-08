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

  public findById(id: number): Observable<Adress>{
    return this.http.get<Adress>(this.adressUrl+'/adress/'+id)
  }

  save(newAdres: Adress) {
    return this.http.post(this.adressUrl+'/adress',newAdres)
  }

  put(newAdres: Adress) {
    console.log(newAdres)
    return this.http.put(this.adressUrl+'/adress/'+newAdres.id,newAdres)
  }

  public saveWithClient (adress:Adress){
    return this.http.post<Adress>(this.adressUrl+'/client-full', adress)
  }

  public delete(adressId: number) {
    return this.http.delete(this.adressUrl+'/adress/'+adressId)
  }

}
