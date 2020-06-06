import {Component, Input, OnInit} from '@angular/core';
import {Adress} from '../entity/adress';

@Component({
  selector: 'app-adress-form',
  templateUrl: './adress-form.component.html',
  styleUrls: ['./adress-form.component.css']
})
export class AdressFormComponent implements OnInit {

  @Input()
  adress: Adress;

  constructor() { }

  ngOnInit(): void {
  }

}
