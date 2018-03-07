import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KeysComponent } from './keys/keys.component';
import { KeyDetailComponent } from './key-detail/key-detail.component';
import { KeyInsertComponent } from './key-insert/key-insert.component';

const routes: Routes = [
  { path: '', component: KeysComponent },
  { path: 'detail/:id', component: KeyDetailComponent },
  { path: 'add', component: KeyInsertComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
