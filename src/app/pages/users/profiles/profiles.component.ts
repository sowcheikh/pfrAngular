import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../../services/profile.service';
import {Profile} from '../../../models/profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  profile: Profile[];
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getAllProfile().subscribe(
      (res) => {
        this.profile = res;
      }
    );
  }

}
