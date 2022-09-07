import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PopoverController } from '@ionic/angular';
import { NotificationsComponent } from '../popups/notifications/notifications.component';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.page.html',
  styleUrls: ['./car-info.page.scss'],
})
export class CarInfoPage implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  carList: any[] = [
    { chassisNo: 12345, poaStatus: 'Not Uploaded', strDate: "29 July2020", receiptStatus: 'Unpaid' },
    { chassisNo: 23456, poaStatus: 'Pending', strDate: "29 July 2021", receiptStatus: 'Paid' },
    { chassisNo: 34567, poaStatus: 'Approved', strDate: "29 July 2021", receiptStatus: 'Generated' },
    { chassisNo: 45678, poaStatus: 'Rejected', strDate: "29 July 2021", receiptStatus: 'Paid' },
    { chassisNo: 56789, poaStatus: 'Not Uploaded', strDate: "29 July 2021", receiptStatus: 'Unpaid' },
    { chassisNo: 67890, poaStatus: 'Carbon', strDate: "29 July 2021", receiptStatus: 'Unpaid' },
    { chassisNo: 78901, poaStatus: 'Nitrogen', strDate: "29 July 2021", receiptStatus: 'Paid' },
    { chassisNo: 89012, poaStatus: 'Oxygen', strDate: "29 July 2021", receiptStatus: 'Paid' },
    { chassisNo: 90987, poaStatus: 'Fluorine', strDate: "29 July 2021", receiptStatus: 'Paid' },
    { chassisNo: 12346, poaStatus: 'Sodium', strDate: "29 July 2021", receiptStatus: 'Paid' },
    { chassisNo: 98765, poaStatus: 'Aluminum', strDate: "29 July 2021", receiptStatus: 'Paid' },
    { chassisNo: 87654, poaStatus: 'Silicon', strDate: "29 July 2021", receiptStatus: 'Paid' },
    { chassisNo: 65432, poaStatus: 'Phosphorus', strDate: "29 July 2021", receiptStatus: 'Paid' },
    { chassisNo: 54321, poaStatus: 'Sulfur', strDate: "29 July 2021", receiptStatus: 'Paid' },
    { chassisNo: 17, poaStatus: 'Chlorine', strDate: "29 July 2021", receiptStatus: 'Paid' },
    { chassisNo: 18, poaStatus: 'Argon', strDate: "29 July 2021", receiptStatus: 'Paid' },
    { chassisNo: 19, poaStatus: 'Potassium', strDate: "29 July 2021", receiptStatus: 'Paid' },
    { chassisNo: 20, poaStatus: 'Calcium', strDate: "29 July 2021", receiptStatus: 'Paid' },
  ];

  displayedColumns: string[] = ['chassisNo', 'poaStatus', 'strDate', 'receiptStatus', 'invGen', 'upPoa'];
  dataSource = new MatTableDataSource<any>(this.carList);

  constructor(public popoverCtrl: PopoverController,) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async holdsPopup(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      componentProps: { data: ev },
      cssClass: 'custom-pop',
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

}