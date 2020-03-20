import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const material = [
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatInputModule,
  MatToolbarModule,
  MatDividerModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule { }
