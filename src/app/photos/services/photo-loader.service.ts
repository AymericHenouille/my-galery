import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PhotoLoaderService {

  public photos: Observable<Photo[]>;

  constructor(private firestore: AngularFirestore) {
    this.photos = this.firestore.collection('photos').valueChanges() as Observable<Photo[]>;
  }

  public uploadPhoto(file: File, tags: string[]): void {

  }

  public removePhoto(photo: Photo): void {

  }

}
