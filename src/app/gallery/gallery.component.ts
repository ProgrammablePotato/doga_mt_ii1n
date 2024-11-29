import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  arts:any
  constructor (private base:BaseService) {
    this.base.getArts().subscribe(
      (res)=> this.arts=res
    )
  }

  editArt(index:any) {

  }
  deleteArt(index:any) {

  }
}
