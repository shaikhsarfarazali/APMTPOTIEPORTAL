import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenInvPage } from './gen-inv.page';

const routes: Routes = [
  {
    path: '',
    component: GenInvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenInvPageRoutingModule {}
