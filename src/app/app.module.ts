import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KeysComponent } from './keys/keys.component';
import { KeysService } from './keys.service';
import { AppRoutingModule } from './/app-routing.module';
import { KeyDetailComponent } from './key-detail/key-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    KeysComponent,
    KeyDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [KeysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
