import { Component, OnInit } from '@angular/core';
import sidebarJson from 'src/assets/data/sidebar.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hide: boolean = false;
  mobileNav = sidebarJson[0];
  

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hide = !this.hide;
    const element = window.document.getElementById("mySidenav");
    if (this.hide && element !== null) {
      element.style.width = "100%";
      element.style.display = "block";
      element.style.height = "100vh";
      element.style.position = "fixed"
    } else if (!this.hide && element !== null) {
      element.style.width = "0";
      element.style.display = "none";
      element.style.height = "auto";
      element.style.position = "relative"
    }
  }



}
