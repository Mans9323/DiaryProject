import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Profile } from '../profile/profile.model';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  form: FormGroup;
  profile: Profile[];
  entryId: string;
  isLoading = false;
  private profileSub: Subscription;

  constructor(private alertCtrl: AlertController,private route: ActivatedRoute,private navCtrl: NavController,private profileService: ProfileService, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  this.isLoading = true;
  this.profileSub = this.profileService.getProfile().subscribe(
    profile => {
      this.profile = profile;
      this.entryId = this.profile[0].id;
      this.form = new FormGroup({
        firstname: new FormControl(this.profile[0].firstname, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        lastname: new FormControl(this.profile[0].lastname, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        birthday: new FormControl(this.profile[0].birthday,{
          updateOn: 'blur',
          validators: [Validators.required]
        })
      });
      this.isLoading = false;
    }, error => {
      this.alertCtrl.create(
        {
          header: 'An error occured!', 
          message: 'Profile could not be fetched. Please try again later.',
          buttons: [{text: 'Okay', handler: () => {
            this.router.navigate(['/home/tabs/viewprofile']);
          }
        }
      ]
      })
      .then(alertEl => {
      alertEl.present();
      });
    }
    )}

  onEditProfile() {
    if(!this.form.valid){
      return;
    }
    this.loadingCtrl.create({
      message: 'Editting Profile'
    }).then(loadingEl => {
      loadingEl.present();
      const dateString = this.form.value.birthday.split('T')[0];
      return this.profileService.updateProfile(
        this.entryId,
        this.form.value.firstname,
        this.form.value.lastname,
        dateString
      ).subscribe(() => {
        loadingEl.dismiss();
        this.form.reset();
        this.router.navigate(['/home/tabs/menu']);
      })
    })
  }
  
  }