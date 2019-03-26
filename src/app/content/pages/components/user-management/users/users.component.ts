import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userPermision} from '../../../../../../assets/user'
@Component({
  selector: 'm-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  a;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.a=userPermision
   }

  ngOnInit() {
  }
  newUser() {
    this.router.navigate(["/user-management/new-users"])
  }
  newRole() {
    this.router.navigate(["/user-management/new-role"])
  }
}
