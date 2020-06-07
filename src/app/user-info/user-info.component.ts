import { Component, OnInit } from '@angular/core';
import {User} from '../entity/user';
import {UserService} from '../service/login/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user:User;

  constructor(private userService: UserService){
    this.user=new User();
    userService.getUserLogged().subscribe( newuser => {this.user=newuser})
  }

  ngOnInit() {

  }

}
