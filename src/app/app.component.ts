import { Component } from '@angular/core';
import {User} from './entity/user';
import {UserService} from './service/login/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user:User;
  constructor(private userService: UserService){
    this.user=new User();
    userService.getUserLogged().subscribe( newuser => {this.user=newuser})
  }

}
