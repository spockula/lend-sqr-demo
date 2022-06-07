import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lend-sqr-test';
  showHeader: boolean = true;
  showSidebar: boolean = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.route.firstChild !== null) {
          this.showHeader = this.route.firstChild.snapshot.data["showHeader"];
          this.showSidebar = this.route.firstChild.snapshot.data["showSidebar"];
        }
      }
    });
  }
}
