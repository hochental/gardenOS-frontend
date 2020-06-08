import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../entity/client';
import {Adress} from '../entity/adress';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  @Input()
  client: Client;

  @Input()
  adress: Adress;

  isClicked: boolean;
  clicked: boolean;

  constructor() { }

  ngOnInit(): void {
  this.isClicked=false;
  }

}
