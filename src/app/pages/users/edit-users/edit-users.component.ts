import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      profile: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.minLength(9)]],
    });
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.registerForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  // tslint:disable-next-line:typedef
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
