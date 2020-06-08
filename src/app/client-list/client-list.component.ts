import { Component, OnInit } from '@angular/core';
import {Client} from '../entity/client';
import {ClientService} from '../service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) {  }

  ngOnInit(): void {
    this.clientService.findAll().subscribe(
      data => {this.clients=data})
  }

  delete(id: number){
    this.clientService.delete(id).subscribe(()=>{window.location.reload()});
  }

}
