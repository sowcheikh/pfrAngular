import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  files: any = [];
  constructor() {
  }
  // tslint:disable-next-line:typedef
  uploadFile(event) {
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name);
    }
  }
  // tslint:disable-next-line:typedef
  deleteAttachment(index) {
    this.files.splice(index, 1);
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
