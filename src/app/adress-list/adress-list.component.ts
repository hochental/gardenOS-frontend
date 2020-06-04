import { Component, OnInit } from '@angular/core';
import {AdressService} from '../service/adress.service';
import {Adress} from '../entity/adress';

@Component({
  selector: 'app-adress-list',
  templateUrl: './adress-list.component.html',
  styleUrls: ['./adress-list.component.css']
})
export class AdressListComponent implements OnInit {

  adresses: Adress[];

  constructor(private adressService: AdressService) {  }

  ngOnInit(): void {
    this.adressService.findAll().subscribe(
      data => {this.adresses=data})

    console.log(this.adresses)

  }

}
