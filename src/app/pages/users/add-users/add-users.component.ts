import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {Profile} from '../../../models/profile';
import {ProfileService} from '../../../services/profile.service';
import {UploadService} from '../../../services/upload.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  avatar: any;
  message: string;
  url: string | ArrayBuffer = 'assets/images/SA.jpg';
  msg = '';
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private profileService: ProfileService,
              private fileUploadService: UploadService) { }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.registerForm.controls; }
  registerForm: FormGroup;
  submitted = false;

  // tslint:disable-next-line:typedef
  profiles: Profile[] = [];
  value: string;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profile: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      avatar: ['', Validators.required]
      // telephone: ['', [Validators.required, Validators.minLength(9)]],
    });
    this.getProfile();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    const {nom, password, prenom, email, profile, avatar} = this.registerForm.value;
    const user = new FormData();
    user.append('nom', nom);
    user.append('password', password);
    user.append('prenom', prenom);
    user.append('email', email);
    user.append('profile', profile);
    user.append('avatar', this.avatar);
    this.userService.create(user).subscribe(
      res => {
        this.message = 'ok';
      }
    );
  }
  // tslint:disable-next-line:typedef
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  // tslint:disable-next-line:typedef
  getProfile() {
    this.profileService.getAllProfile().subscribe(
      (res) => {
        this.profiles = res;
      }
    );
  }
  // tslint:disable-next-line:typedef
  handleFileInput(event) {
    // tslint:disable-next-line:triple-equals
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    // tslint:disable-next-line:prefer-const
    let mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Only images are supported';
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    // tslint:disable-next-line:no-shadowed-variable variable-name
    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }
}
