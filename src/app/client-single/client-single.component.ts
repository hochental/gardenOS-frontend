import { Component, OnInit } from '@angular/core';
import {ClientService} from '../service/client.service';
import {ActivatedRoute} from '@angular/router';
import {Client} from '../entity/client';

@Component({
  selector: 'app-client-single',
  templateUrl: './client-single.component.html',
  styleUrls: ['./client-single.component.css']
})
export class ClientSingleComponent implements OnInit {

  client: Client;

  constructor(private clientService: ClientService, private route:ActivatedRoute) { this.client = new Client()}

  ngOnInit(): void {
    this.clientService.findById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe( data => this.client=data)
  }



}
