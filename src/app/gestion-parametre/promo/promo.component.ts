import {Component, HostBinding, HostListener, OnInit, Output} from '@angular/core';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onFileDropped = new EventEmitter<any>();
  files: any = [];
  @HostBinding('style.background-color') private background = '#f5fcff';
  @HostBinding('style.opacity') private opacity = '1';

  //Dragover listener
  // tslint:disable-next-line:typedef
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.opacity = '0.8';
  }

  //Dragleave listener
  // tslint:disable-next-line:typedef
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.opacity = '1';
  }

  //Drop listener
  // tslint:disable-next-line:typedef
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff';
    this.opacity = '1';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

}
