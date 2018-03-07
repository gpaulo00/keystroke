import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule,
} from '@angular/material';

/**
 * This module imports the needed modules from Angular Material.
 */
@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
