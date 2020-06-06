import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../entity/client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  @Input()
  client: Client;

  constructor() { }

  ngOnInit(): void {
  }

}
