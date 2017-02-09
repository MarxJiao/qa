import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidelist',
  templateUrl: './sidelist.component.html',
  styleUrls: ['./sidelist.component.scss']
})
export class SidelistComponent implements OnInit {

  @Input() activeitem: string;
  @Output() changeItem = new EventEmitter<void>();

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
  ]
  constructor() { }

  ngOnInit() {
    console.log(this.activeitem);
  }

  selectItem(itemName) {
    this.changeItem.emit(itemName);
    console.log(itemName);
  }
}
