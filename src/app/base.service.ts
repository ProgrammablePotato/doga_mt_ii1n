import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  url = "https://leeroy-jenkins-5f912-default-rtdb.europe-west1.firebasedatabase.app/pics.json"
  constructor (private http:HttpClient) {

  }

  getArts () {
    return this.http.get(this.url)
  }
  updateArt(index:any) {
    
  }
  deleteArt(index:any) {

  }

}
