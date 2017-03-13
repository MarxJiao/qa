import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras
}                           from '@angular/router';
@Component({
  selector: 'app-sidelist',
  templateUrl: './sidelist.component.html',
  styleUrls: ['./sidelist.component.scss']
})
export class SidelistComponent implements OnInit {

  @Input() activeitem: string;
  @Output() changeItem = new EventEmitter<void>();
  @Output() sidebartoggle = new EventEmitter<void>();
  list: any[] = [
    {
      name: 'aboutme',
      content: '哈哈哈'
    },
    {
      name: 'skills',
      content: '哈哈哈ha'
    },
    {
      name: 'projects',
      content: '哈哈哈11'
    },
    {
      name: 'opensource',
      content: '哈哈哈2'
    },
    {
      name: 'connect',
      content: '哈哈哈3'
    },
    {
      name: 'div',
      content: '哈哈哈3'
    },
  ]
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.activeitem);
  }

  selectItem(itemName) {
    console.log(itemName)
    let ele = document.getElementById(itemName);
    if (ele) {
      document.getElementById(itemName).scrollIntoView();
    }
    this.sidebartoggle.emit();
    let navigationExtras: NavigationExtras = {
      fragment: itemName
    };
    this.router.navigate(['./content'], navigationExtras);
  }
}
