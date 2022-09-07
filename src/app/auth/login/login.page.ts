import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { regex } from 'src/app/services/common_auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;


  get errorControl() {
    return this.loginForm.controls;
  }

  constructor(private fb: FormBuilder, private router: Router, public alert: ToastController) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [, [Validators.required, Validators.pattern(regex.email)]],
      password: [, [Validators.required]],
      terminal: [, []],
    })
  }

  async onSubmit() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      const toast = await this.alert.create({
        message: 'Please provide all the required values!',
        duration: 1500,
        position: "top"
      });
      await toast.present();
      return false;
    } else {
      let navigationExtras: NavigationExtras = {
        state: {
          user: this.loginForm.value
        }
      };
      this.router.navigate(['home'], navigationExtras);
    }
  }

}
