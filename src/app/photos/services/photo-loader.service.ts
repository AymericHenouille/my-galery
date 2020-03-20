import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoLoaderService {

  public photos: Photo[];

  constructor() {
    this.photos = [
      {
        path: 'https://i2.wp.com/centre-secours-faune-sauvage-millau.fr/wp-content/uploads/e79c00b6e869b88df914db8ab89e9942-potoo-bird-funny-things.jpg?fit=573%2C576',
        tags: ['potoo']
      },
      {
        path: 'https://3.bp.blogspot.com/-mtgLVa7nUqg/V07m1Pkz9ZI/AAAAAAAAk6o/f55hjCc8xmU1VArTWxilSbe1Av_taLvzgCLcB/s1600/potoo1.jpg',
        tags: ['potoo']
      },
      {
        path: 'https://imgix.ranker.com/user_node_img/50069/1001379053/original/potoos-can-see-you-moving-with-their-eyes-closed-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
        tags: ['potoo']
      },
      {
        path: 'https://designyoutrust.com/wp-content/uploads/2019/02/154988969518781884.png',
        tags: ['potoo']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/517434078157471745/690537461650292756/IMG00151-20140629-1043.jpg',
        tags: ['geoffrey']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/517434078157471745/690537801531523082/20151121_194436_-_Copie.jpg',
        tags: ['geoffrey']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/517434078157471745/690537847857348669/20151122_082027.jpg',
        tags: ['geoffrey']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/505001979152695296/575707172810522625/IMG_20190412_131136931.jpg',
        tags: ['Flo']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/505001979152695296/690537983992004618/received_1946989658964969.jpeg',
        tags: ['aymeric']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/505001979152695296/690537986097414194/20181008_153748.jpg',
        tags: ['aymeric']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/505001979152695296/690537997803716649/20190514_130546.jpg',
        tags: ['bennoit', 'geoffrey']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/517434078157471745/690538192503308348/guitar_tier0.png',
        tags: ['Nos espoires de finir un projet un jour']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/517434078157471745/690538198992027749/FireBand_piano_I.png',
        tags: ['Nos espoires de finir un projet un jour']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/517434078157471745/690538428714188800/1543940877610_PART_15439408303931.jpg',
        tags: ['bennoit']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/517434078157471745/690538634993991710/20170801_063550.jpeg',
        tags: ['geoffrey']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/516527550634262528/690539001903448094/le_fete.jpg',
        tags: ['bennoit']
      },
      {
        path: 'https://media.discordapp.net/attachments/505001979152695296/690539293621616660/received_1528793933949341.jpeg?width=481&height=642',
        tags: ['geoffrey', 'Aymeric']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/505001979152695296/690539394691760138/received_626458171169770.jpeg',
        tags: ['Hugo sans H']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/517434078157471745/690539466661691403/79857749_194255348396797_8997243737853255873_n.jpg',
        tags: ['Flo']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/517434078157471745/690539585448706048/69893286_473353003303922_5219596974138993067_n.jpg',
        tags: ['Flo']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/517434078157471745/690539662418247760/53590009_1338892419624218_5748197316297219157_n.jpg',
        tags: ['Flo']
      },
      {
        path: 'https://cdn.discordapp.com/attachments/505001979152695296/690539821986349066/received_672531473098086.jpeg',
        tags: ['Benoit']
      }
    ];
  }

  public uploadPhoto(photo: Photo): void {
    this.photos.push(photo);
  }

  public removePhoto(photo: Photo): void {
    this.photos.splice(this.photos.indexOf(photo), 1);
  }

}
