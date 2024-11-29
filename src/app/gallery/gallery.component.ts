import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  rows=[
    {key:"name",text:"",type:"text"},
    {key:"brand",text:"Brand: ",type:"text"},
    {key:"sport",text:"Sport: ",type:"text"},
    {key:"price",text:"$ ",type:"number"}
  ]
  arts:any
  thisid= 0
  newArt:any
  constructor (private base:BaseService) {
    this.base.getArts().subscribe(
      (res)=> this.arts=res
    )
  }
  setId(id_in:any, art_in:any) {
    if (id_in == this.thisid) {
      this.thisid = -1;
      return
    }
    this.thisid = id_in
    this.newArt = art_in
    this.base.getArts().subscribe(
      (res)=> this.arts=res
    )
  }

  editArt(index:any) {
    this.base.updateArt(this.newArt)
  }
  deleteArt(index:any) {

  }
}
