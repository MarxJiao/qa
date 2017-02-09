import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input('activeitem') set updateActiveitem(val) {
    if (document.getElementById(val)) {
      setTimeout(() => {
        window.location.hash = val;
      }, 500)
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
