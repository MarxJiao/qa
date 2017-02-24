import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Observable }           from 'rxjs/Observable';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  f: Observable<string>;
  @Input('activeitem') set updateActiveitem(val) {
    if (document.getElementById(val)) {
      setTimeout(() => {
        window.location.hash = val;
      }, 500)
    }
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.f = this.route.fragment.map(fragment => { 
      console.log(fragment)
      return fragment || 'None'
    });
    this.f.subscribe(
      fragment => {console.log(fragment)}
    )
  }

}
