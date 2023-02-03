import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../classes/User';
import { UserService } from '../service/user.service';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  faArrowLeft = faArrowCircleLeft;

  public user: User | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const id = Number(param['id']);
      const user = this.userService.getUser(id);
        if(user) {
          this.user = user;
        }
      }
    )
  }

}
