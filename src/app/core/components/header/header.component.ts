import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hide: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hide = !this.hide;
    const element = window.document.getElementById("mySidenav");
    console.log('this', this.hide)
    if (this.hide && element !== null) {
      element.style.width = "250px";
    } else if (!this.hide && element !== null) {
      element.style.width = "0";
    }
  }



}
