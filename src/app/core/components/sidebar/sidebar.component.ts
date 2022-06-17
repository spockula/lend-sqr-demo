import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  sidebarJson from 'src/assets/data/sidebar.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  selectedTab: string = '';
  backHome: boolean = true;
  sideNav = sidebarJson[0];

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  switchTabs(tab: any) {
    this.selectedTab = tab;
  }

}
