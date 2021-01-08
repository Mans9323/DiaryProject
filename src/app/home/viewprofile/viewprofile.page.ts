import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from '../profile/profile.model';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.page.html',
  styleUrls: ['./viewprofile.page.scss'],
})
export class ViewprofilePage implements OnInit {

  profile: Profile[];
  isloading = false;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.profile.subscribe(profiles => {
      this.profile = profiles;
    });
  }

  ionViewWillEnter() {
    this.isloading = true;
    this.profileService.getProfile().subscribe(() => {
      this.isloading = false;
    });
  }

}
