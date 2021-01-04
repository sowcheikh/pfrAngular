import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-profiles',
  templateUrl: './add-profiles.component.html',
  styleUrls: ['./add-profiles.component.scss']
})
export class AddProfilesComponent implements OnInit {
  libelle = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.libelle.hasError('required')) {
      return 'You must enter a value';
    }

    return this.libelle.hasError('libelle') ? 'Not a valid email' : '';
  }
}
