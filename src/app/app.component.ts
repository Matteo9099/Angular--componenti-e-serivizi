import { Component } from '@angular/core';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;
  userSelected: User = new User();

  updateUser(user: User) {
    this.showForm = !this.showForm;
    this.userSelected = user;
  }
  newUser() {
    this.userSelected = new User();
    this.showForm = !this.showForm;

  }
}