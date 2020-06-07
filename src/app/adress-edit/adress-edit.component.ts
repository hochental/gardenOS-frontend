import { Component, OnInit } from '@angular/core';
import {AdressService} from '../service/adress.service';
import {Adress} from '../entity/adress';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-adress-edit',
  templateUrl: './adress-edit.component.html',
  styleUrls: ['./adress-edit.component.css']
})
export class AdressEditComponent implements OnInit {

  editedAdress: Adress;

  constructor(private adressService: AdressService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.adressService
      .findById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe( data =>{
      this.editedAdress=data;
    });
  }

  onSubmit(){
    this.adressService.save(this.editedAdress)
      .subscribe( ()=> {this.router.navigate(['/'])}) /*Dodac wyswietlanie dla jednego klienta*/
  }

}
