import { UserService } from '../service/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  private usercopy: User;
  private __user: User;

  faArrowLeft = faArrowCircleLeft;

  @Input() set user(user: User) {
    this.__user = user;
    this.usercopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.user = new User();
    this.__user = new User();
    this.usercopy = new User();
  }

  ngOnInit(): void {
    this.user = new User();
    this.route.params.subscribe(param => {
      const id = Number(param['id']);
      const user = this.userService.getUser(id);
        if(user) {
          this.user = user;
        }
      }
    )
  }
  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    }
    else {
      this.userService.createUser(this.user);
    }
    this.router.navigate(['users'])
  }
  resetForm(form: FormGroup) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.usercopy;
    }
  }


}