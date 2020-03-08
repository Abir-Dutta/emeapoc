import { Component, OnInit, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html'
})
export class ProfileButtonComponent implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {}
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Privacy',
      message: '<div>' +
        '<p>The privacy of your personal information is paramount to us.' +
        ' Don\'t worry your data will not be shared or passed to any third parties at any time.</p>' +
        '<p>The only communication you will ever receive is from a potential recruiter or the Qliksee team.</p>' +
        '<p>If you want to read more about or privacy policy please click <a href="#">here</a></p>' +
      '</div>',
      buttons: [
        {
          text: 'Accept',
          handler: () => {
            console.log('Confirm Okay');
          }
        },
        {
          text: 'Decline',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }
}
