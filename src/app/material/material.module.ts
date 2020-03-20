import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

const material = [
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatInputModule,
  MatToolbarModule
];

@NgModule({
  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule { }
