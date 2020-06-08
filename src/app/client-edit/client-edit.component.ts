import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../service/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  editedClient: any;

  constructor(private clientService: ClientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.clientService.findById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe( data =>{
        this.editedClient=data;
      });
  }

  onSubmit(){
    this.editedClient.id=Number(this.route.snapshot.paramMap.get('id'));
    this.clientService.put(this.editedClient)
      .subscribe( ()=> {this.router.navigate(['/list-clients'])})
  }

}
