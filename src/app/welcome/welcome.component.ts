import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: '<h3 class="welcome" ><i>{{welcome}}</i></h3>'
})
export class WelcomeComponent implements OnInit {

  welcome = '-- not initialized yet --';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn ?
      'Welcome, ' + this.userService.user.name :
      'Please log in.';
  }

}