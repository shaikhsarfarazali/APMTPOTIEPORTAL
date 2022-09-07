import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userData: FormGroup;

  defaultDate = "1987-06-30";
  isSubmitted = false;
  constructor(private router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    this.userData = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      pswrd: ['', [Validators.required, Validators.minLength(5)]],
      conpswrd: ['', [Validators.required, Validators.minLength(5)]],
      amount: ['', [Validators.required]],
    })
  }
  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.userData.get('dob').setValue(date, {
      onlyself: true
    })
  }
  get errorControl() {
    return this.userData.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.userData.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.userData.value)
    }
  }

}
