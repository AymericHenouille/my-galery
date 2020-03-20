import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryPageComponent } from './galery-page/galery-page.component';
import { GaleryComponent } from './galery-page/galery/galery.component';
import { PhotosModule } from 'src/app/photos/photos.module';
import { GaleryRoutingModule } from './galery-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { UploadImageComponent } from './galery-page/upload-image/upload-image.component';



@NgModule({
  declarations: [GaleryPageComponent, GaleryComponent, UploadImageComponent],
  imports: [
    CommonModule,
    PhotosModule,
    MaterialModule,
    GaleryRoutingModule
  ]
})
export class GaleryModule { }
