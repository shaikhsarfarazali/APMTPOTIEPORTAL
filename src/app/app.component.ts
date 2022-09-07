import { Component, OnInit } from '@angular/core';
import { CommonAuth } from './services/common_auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showHead: boolean = false;
  sideMenus: any = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    },
    {
      title: "About Us",
      url: "/about",
      icon: "business-sharp"
    },
    {
      title: "Contact Us",
      url: "/contact-us",
      icon: "people-sharp"
    },
    {
      title: "Registration",
      url: "/registration",
      icon: "person-add-sharp"
    },
    {
      title: "Login",
      url: "/login",
      icon: "person-sharp"
    },
  ];
  constructor(private comm: CommonAuth) {
  }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('userData'));
    if (data) {
      this.showHead = true;
    }
    this.comm.userData.subscribe(
      (data) => {
        localStorage.setItem('userData', JSON.stringify(data));
        if (data) {
          this.showHead = true;
        } else {
          this.showHead = false;
        }
      }
    );
  }
}
