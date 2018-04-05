import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatTableModule,
  MatCheckboxModule,
  MatGridListModule,
} from '@angular/material';

/**
 * This module imports the needed modules from Angular Material.
 */
@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    MatGridListModule,
  ],
})
export class MaterialModule {}
