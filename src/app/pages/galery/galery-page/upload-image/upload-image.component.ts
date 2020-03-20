import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  selectedFile: File;

  constructor(public dialogRef: MatDialogRef<UploadImageComponent>) { }

  ngOnInit(): void {
  }

  detectFile(event): void {
    this.selectedFile = event.target.file;
  }

}
