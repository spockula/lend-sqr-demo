import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId: any;
  user: any;
  constructor(
    public router: Router, 
    public activatedRoute: ActivatedRoute,
    public mainService: MainService) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.getUserInfo(this.userId);
  }

  routeToHome() {
    this.router.navigateByUrl('/all-users')
  }

  getUserInfo(userId: any) {
    this.mainService.getUserById(userId).subscribe((res: any) => {
      this.user = res;
    }, err => {
      console.log('here', err)
    })
  }

}
