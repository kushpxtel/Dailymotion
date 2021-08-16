import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
import { HttpClient } from '@angular/common/http';
import User from 'src/app/models/User';
import video from 'src/app/models/Video';
import { MyplaylistComponent } from '../myplaylist/myplaylist.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userApi:any
  @Input() currentVid:User = {} as User
  outAny:User[] = []
  vidPresent:boolean = false
  //currentUser:User = {} as User   //shortcut to make an empty user
  

  constructor(private data:UserDataService) { }
 
  videoData:video = {} as video

  ngOnInit(): void {
  }

  searchBtn = (fname:string) => {
    console.log(fname)
    this.data.setVar(fname)
    //this.input = fname



    this.data.getInfoFromAPI().subscribe((dataFromApi:User[]) => {
      console.log("Got data from API")
      console.log(dataFromApi)
      
      this.userApi = dataFromApi

      console.log(this.userApi["list"])
      this.outAny = this.userApi["list"]

    })


  }
  myPlaylistBtn = () => {
    console.log("my Playlist pressed")
    this.data.addVideoPlaylist(this.currentVid)
    this.vidPresent = true
  }
}
