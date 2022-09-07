import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenInvPageRoutingModule } from './gen-inv-routing.module';

import { GenInvPage } from './gen-inv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenInvPageRoutingModule
  ],
  declarations: [GenInvPage]
})
export class GenInvPageModule {}
