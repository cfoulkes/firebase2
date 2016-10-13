import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

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
}
