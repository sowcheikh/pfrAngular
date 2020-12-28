import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  clicked: boolean;

  constructor() {
    this.clicked = this.clicked === undefined ? false : true;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }
}
