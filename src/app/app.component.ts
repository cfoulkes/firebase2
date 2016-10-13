import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2'

import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  user: User = new User();

  constructor(private af:AngularFire){
  }
 

  ngOnInit() {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  login() {
    this.af.auth.login({email:'user1@b.com', password: 'password'});
  }

  logout() {
    this.af.auth.logout();
  }

  register() {
    console.log('register ' + JSON.stringify(this.user));
    //this.af.auth.logout();
    this.af.auth.createUser(this.user).then(function(auth) {
      console.log('register response ' + JSON.stringify(auth));
    })
  }
}
