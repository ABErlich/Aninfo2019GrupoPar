import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [MatToolbarModule, MatGridListModule, MatButtonModule],
  exports: [MatToolbarModule, MatGridListModule, MatButtonModule]
})
export class MaterialModule {

}
