import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
} from '@angular/material';

/**
 * This module imports the needed modules from Angular Material.
 */
@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
})
export class MaterialModule {}
