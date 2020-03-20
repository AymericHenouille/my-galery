import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../models/photo.model';
import { MatDialog } from '@angular/material/dialog';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() photo: Photo;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openDialoge(photo: Photo): void {
    const dialog = this.dialog.open(PhotoDetailsComponent, {
      width: '85%',
      data: photo
    });
  }

}
