import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KeysComponent } from './keys/keys.component';
import { KeysService } from './keys.service';


@NgModule({
  declarations: [
    AppComponent,
    KeysComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [KeysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
