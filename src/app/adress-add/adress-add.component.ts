import { Component, OnInit } from '@angular/core';
import {Adress} from '../entity/adress';
import {ActivatedRoute, Router} from '@angular/router';
import {AdressService} from '../service/adress.service';
import {Client} from '../entity/client';
import {ClientService} from '../service/client.service';

@Component({
  selector: 'app-adress-add',
  templateUrl: './adress-add.component.html',
  styleUrls: ['./adress-add.component.css']
})
export class AdressAddComponent implements OnInit {

  newAdress: Adress;
  client: Client;

  constructor(private adressService: AdressService, private clientService: ClientService, private route: ActivatedRoute, private router: Router) { this.client = new Client(); }

  ngOnInit(): void {
    this.newAdress = new Adress();
    this.clientService.findById(Number(this.route.snapshot.paramMap.get('id'))).subscribe(
      data => {this.client=data})
    }

  onSubmit() {
    this.newAdress.client=this.client;
    this.adressService.save(this.newAdress).subscribe(()=>{
      this.newAdress = new Adress();
      this.router.navigate(['/list-clients'])
    })
  }
}
