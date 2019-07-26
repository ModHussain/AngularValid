import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  users = [];
  bool = false;
  onSubmit(){
    console.log(this.user);
    this.users.push(this.user);
    this.bool = true;
    console.log(this.users);
    this.user = new User();
  }
}
