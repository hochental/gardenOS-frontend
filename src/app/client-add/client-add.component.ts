import { Component, OnInit } from '@angular/core';
import {Client} from '../entity/client';
import {ClientService} from '../service/client.service';
import {Router} from '@angular/router';
import {Adress} from '../entity/adress';
import {AdressService} from '../service/adress.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  newClient:Client;
  newAdresses:Adress;

  constructor(private clientService: ClientService, private adressService: AdressService, private router: Router) { }

  ngOnInit(): void {
    this.newClient = new Client();
    this.newAdresses=new Adress();
  }

  onSubmit() {
  if (this.newAdresses.adress != null) {
      this.newAdresses.client = this.newClient;
      this.adressService.saveWithClient(this.newAdresses).subscribe(() => {
        this.newAdresses = new Adress();
      })
  }else{
    this.clientService.save(this.newClient).subscribe( () =>{
      this.newClient=new Client();
    })
  }
    this.router.navigate(['/list-clients'])
  }

}
