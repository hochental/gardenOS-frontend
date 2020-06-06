import { Component, OnInit } from '@angular/core';
import {Client} from '../entity/client';
import {ClientService} from '../service/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  newClient:Client;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.newClient = new Client();
  }

  onSubmit(){
    this.clientService.save(this.newClient).subscribe(()=>{
      this.newClient = new Client();
      this.router.navigate(['/list-clients'])
    })
  }

}
