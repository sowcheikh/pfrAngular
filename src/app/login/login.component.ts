import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {FormGroup, NgForm} from '@angular/forms';
import {User} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: any;
  formLogin: FormGroup;
  user: User[];
  loginUserData = {
    email: '',
    password: '',
    profile: 'admin'
  };
  users: User[];

  constructor(private auth: AuthService,
              private router: Router) {
  }

// tslint:disable-next-line:typedef
  loginUser(f: NgForm){
    // console.log(form);

    this.auth.login(this.loginUserData).subscribe(
      res => {
        console.log(res);
        // tslint:disable-next-line:triple-equals
        if ( res == 'ROLE_ADMIN') {
          this.router.navigate(['/admin']).then(r => {
            console.log('connexion reussi');
          });

          // tslint:disable-next-line:triple-equals
        } else if (res == 'ROLE_APPRENANT'){
          this.router.navigate(['/apprenant']);
          // tslint:disable-next-line:triple-equals
        } else if (res == 'ROLE_FORMATEUR') {
          this.router.navigate(['/formateur']);
          // tslint:disable-next-line:triple-equals
        } else if (res == 'ROLE_CM') {
          this.router.navigate(['/cm']);
        } else {
          this.router.navigate(['/not-found']);
        }
      },

      err => console.log(err),
      () => {

        // this.router.navigate(['/admin']);
      }


    );
  }
// tslint:disable-next-line:typedef
  getAllUsers() {
    this.auth.getUser().subscribe(
      res => console.log(res),
      err => console.log(err),
    );
  }
  ngOnInit(): void {
  }

}
