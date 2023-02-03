import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../classes/User';
import { faTrash, faPencilAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  //inputs: ['user:user-data']
})
export class UserComponent implements OnInit {

    faPen = faPencilAlt;
    faTrash = faTrash;
    faEye = faEye;

  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();
  

  constructor(private userService: UserService, private route: Router) {

  }

  ngOnInit() {
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    // metodo 1
    // this.route.navigateByUrl('/users/' + this.user?.id + '/edit');

    // metodo 2 
    this.route.navigate(['users', this.user?.id, 'edit']);
  }
}