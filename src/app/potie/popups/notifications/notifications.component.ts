import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  @Input() data: string;
  poaFile: any;
  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
    if (this.data) {
    }
  }

  async onUpload() {
    await this.popoverController.dismiss();
  }

}
