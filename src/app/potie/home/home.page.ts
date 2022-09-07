import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CommonAuth } from 'src/app/services/common_auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;
  private _successMsgSource = new Subject<boolean>();
  successMsg$ = this._successMsgSource.asObservable();
  constructor(private route: ActivatedRoute, private router: Router, private comm: CommonAuth) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
        this.comm.isAuth(this.data)
      }
    });
  }
}
