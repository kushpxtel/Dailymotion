import { Injectable } from '@angular/core';
import User from './models/User';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private videoList:User[] = []
  

  constructor() { }

  addVideoPlaylist = (vid:User) => {
    
     this.videoList.push(vid)
     console.log(`Number of videos: ${this.videoList.length}`)
   }

   getPlaylist = () => {
    return this.videoList
  }

  removeAll = () => {
    this.videoList = []
    
  }
}
