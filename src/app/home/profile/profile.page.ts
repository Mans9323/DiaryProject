import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, Platform } from '@ionic/angular';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  form: FormGroup;
  subscribe : any;
  constructor(private profileService: ProfileService, private router: Router, private loadingCtrl: LoadingController,public platform: Platform) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      lastname: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      birthday: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    })
  }

  createProfile() {
    if(!this.form.valid) {
      return;
    }console.log(this.form.value);
    this.loadingCtrl.create({
      message: 'Saving...'
    }).then(loadingEl => {
      loadingEl.present();
      const dateString = this.form.value.birthday.split('T')[0];
      return this.profileService.addProfile(
        this.form.value.firstname,
        this.form.value.lastname,
        dateString
      ).subscribe(() => {
        loadingEl.dismiss();
        this.router.navigate(['/home/tabs/menu']);
      });
    });
  }

  ionViewDidEnter() {
    this.subscribe = this.platform.backButton.subscribeWithPriority(9999, () => {
      // do nothing
    });
  }
  
  ionViewWillLeave() {
    this.subscribe.unsubscribe();
  }


}