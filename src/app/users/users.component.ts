import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../classes/User';
import { UserService } from '../service/user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: [
    'users.component.scss'
  ]
})

export class UsersComponent implements OnInit, AfterViewInit {
  title = 'Users';
  event$ = new BehaviorSubject(true);
  public users$: Observable<User[]> = this.service.getUsers();
  public users: User[] = [];

  @Output('updateUser') updateUser = new EventEmitter<User>();

  @ViewChildren(UserComponent, {read: ElementRef}) trs!: QueryList<ElementRef>

  constructor(private service: UserService, private router: Router) {

  }
  ngAfterViewInit(): void {
    console.log('after view init', this.trs);
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(res => this.users = res);
  }

  onDeleteUser(user: User) {
    this.service.deleteUser(user).subscribe(res => {
      this.trs.forEach(ele => {
        const el = ele.nativeElement;
        if (Number(el.id) === user.id) {
          el.parentNode.removeChild(el);
        }
      })
    });
   
  }

  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);

  }
}