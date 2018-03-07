import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KeysComponent } from './keys/keys.component';
import { KeyDetailComponent } from './key-detail/key-detail.component';

const routes: Routes = [
  { path: '', component: KeysComponent },
  { path: 'detail/:id', component: KeyDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
