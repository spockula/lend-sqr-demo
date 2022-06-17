import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import {PaginationInstance} from 'ngx-pagination';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllUsersComponent implements OnInit {
  showMe: boolean = false;
  ellipseIndex: number = 0;
  users = [];
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 100
  };
  constructor(public router: Router, public mainService: MainService) { }

  ngOnInit(): void {
    const checkUsersSaved = localStorage.getItem('users');
    if (checkUsersSaved !== null) {
      this.users =  JSON.parse(localStorage.getItem("users")!)
    } else {
      this.getUsers();
    }
  }

  toggle(id: number) {
    this.showMe = !this.showMe;
    this.ellipseIndex = id;
  }


  routeToDetails(userId: any) {
    this.router.navigateByUrl('details/' + userId)
  }

  getUsers() {
    this.mainService.getAllUsers().subscribe((data: any) => {
      localStorage.setItem("users", JSON.stringify(data));
    }, err => {
      console.log('there was an error', err)
    })
  }

}
