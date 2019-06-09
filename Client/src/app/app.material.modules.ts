import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  imports: [MatToolbarModule, MatGridListModule, MatButtonModule, MatListModule, MatDividerModule, MatInputModule, MatIconModule, MatTableModule, MatSelectModule, MatCardModule],
  exports: [MatToolbarModule, MatGridListModule, MatButtonModule, MatListModule, MatDividerModule, MatInputModule, MatIconModule, MatTableModule, MatSelectModule, MatCardModule]
})
export class MaterialModule {

}
