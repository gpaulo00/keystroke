
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { KeysComponent } from './keys/keys.component';
import { KeyService } from './keys.service';
import { AppRoutingModule } from './app-routing.module';
import { KeyDetailComponent } from './key-detail/key-detail.component';
import { MaterialModule } from './material/material.module';
import { KeyInsertComponent } from './key-insert/key-insert.component';
import { ExtraListComponent } from './extra-list/extra-list.component';

@NgModule({
  declarations: [
    AppComponent,
    KeysComponent,
    KeyDetailComponent,
    KeyInsertComponent,
    ExtraListComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
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
