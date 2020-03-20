import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  isUploading = false;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: string[] = [];

  selectedFile: File;

  constructor(public dialogRef: MatDialogRef<UploadImageComponent>) { }

  ngOnInit(): void {
  }

  public add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  public remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  public detectFile(event): void {
    this.selectedFile = event.target.files.item(0);
  }

  public close(): void {
    this.dialogRef.close();
  }

  public upload(): void {
    this.isUploading = true;
  }

}
