import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { User } from '../classes/User';
import { UserService } from '../service/user.service';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { UserInterface } from '../interfaces/user';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  faArrowLeft = faArrowCircleLeft;

  public user: UserInterface | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const id = Number(param['id']);
      this.userService.getUser(id).subscribe(user => this.user = user);
      }
    )
  }

}
