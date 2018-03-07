
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KeysComponent } from './keys/keys.component';
import { KeyService } from './keys.service';
import { AppRoutingModule } from './app-routing.module';
import { KeyDetailComponent } from './key-detail/key-detail.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    KeysComponent,
    KeyDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [KeyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
