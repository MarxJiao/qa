import { Component, OnInit } from '@angular/core';

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  activeitem: string = '';
  // activeitem: string = 'aboutme';
  constructor() { }
  sideOpen:boolean = !this.isScreenSmall();
  ngOnInit() {
    document.body.style.height = window.innerHeight + 'px';
    window.addEventListener('resize', (size: UIEvent) => {
      this.sideOpen = !this.isScreenSmall();
      document.body.style.height = window.innerHeight + 'px';
      console.log(window.innerHeight, window.innerWidth);
    })
  }
  getItem(item) {
    console.log(item);
    this.activeitem = item;
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }
}
