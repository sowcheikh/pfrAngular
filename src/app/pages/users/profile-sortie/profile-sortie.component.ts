import { Component, OnInit } from '@angular/core';
import {ProfileSortieService} from '../../../services/profile-sortie.service';
import {ProfileSorite} from '../../../models/profile_sortie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-sortie',
  templateUrl: './profile-sortie.component.html',
  styleUrls: ['./profile-sortie.component.scss']
})
export class ProfileSortieComponent implements OnInit {
  profileSorities: ProfileSorite[];

  constructor(private profileSortieService: ProfileSortieService,
              private router: Router) { }

  ngOnInit(): void {
    this.profileSortieService.getAllProfileSortie().subscribe(
      (res) => {
        this.profileSorities = res;
      }
    );
  }

  // tslint:disable-next-line:typedef
  updateProfileSortie(profileSortie: ProfileSorite): void {
    window.localStorage.removeItem('editProfileSortie');
    window.localStorage.setItem('editProfileSortie', profileSortie.id.toString());
    this.router.navigate(['edit-profileSortie']);
  }
}
