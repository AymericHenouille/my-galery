import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/photos/models/photo.model';
import { PhotoLoaderService } from 'src/app/photos/services/photo-loader.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  photos: Photo[];

  constructor(private photoLoader: PhotoLoaderService) { }

  ngOnInit(): void {
    this.photos = this.photoLoader.photos;
    console.log(this.photos.length);
  }

}
