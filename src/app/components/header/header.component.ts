import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input('title') title: any;
  pageTitle: Observable<object>;

  constructor(private router: Router) {
  }

  navigate(path) {
    this.router.navigateByUrl(path);
  }
  ngOnInit() {
    // console.log(this.title)
  }

}
