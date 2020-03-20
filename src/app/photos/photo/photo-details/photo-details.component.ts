import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Photo } from '../../models/photo.model';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(public dialogRef: MatDialogRef<PhotoDetailsComponent>, @Inject(MAT_DIALOG_DATA) public photo: Photo) { }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.photo.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: string): void {
    const index = this.photo.tags.indexOf(tag);

    if (index >= 0) {
      this.photo.tags.splice(index, 1);
    }
  }

  public close(): void {
    this.dialogRef.close();
  }

}
