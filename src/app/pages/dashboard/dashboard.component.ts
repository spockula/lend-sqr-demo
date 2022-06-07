import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showMe: boolean = false;
  ellipseIndex: number = 0;
  users = []; 
  constructor(public router: Router, public mainService: MainService) { }

  ngOnInit(): void {
    const checkUsersSaved = localStorage.getItem('users');
    if (checkUsersSaved !== null) {
      this.users =  JSON.parse(localStorage.getItem("users")!) 
      console.log('this is', this.users)
    } else {
      this.getUsers();
    }
  }

  getUsers() {
    this.mainService.getAllUsers().subscribe((data: any) => {
      localStorage.setItem("users", JSON.stringify(data));
    }, err => {
      console.log('there was an error', err)
    })
  }

  toggle(id: number) {
    this.showMe = !this.showMe;
    // this.ellipseIndex = id;
  }

  routeToDetails(userId: any) {
    this.router.navigateByUrl('details/' + userId)
  }

}
