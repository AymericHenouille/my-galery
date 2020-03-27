import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { PhotoLoaderService } from './services/photo-loader.service';
import { PhotoDetailsComponent } from './photo/photo-details/photo-details.component';
import { MaterialModule } from '../material/material.module';
import { FireModule } from '../fire/fire.module';


@NgModule({
  declarations: [ PhotoComponent, PhotoDetailsComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    FireModule
  ],
  exports: [ PhotoComponent ],
  providers: [ PhotoLoaderService ]
})
export class PhotosModule { }
