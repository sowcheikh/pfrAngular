import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  clicked: boolean;

  constructor(private authService: AuthService) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.authService.logout();
  }
}
