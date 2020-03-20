import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadImageComponent } from './upload-image/upload-image.component';

@Component({
  selector: 'app-galery-page',
  templateUrl: './galery-page.component.html',
  styleUrls: ['./galery-page.component.scss']
})
export class GaleryPageComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void { }

  public uploadImage(): void {
    this.matDialog.open(UploadImageComponent, {
      width: '80%'
    });
  }

}
