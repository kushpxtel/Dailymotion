import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
import { HttpClient } from '@angular/common/http';
import User from 'src/app/models/User';
import video from 'src/app/models/Video';
import { MyplaylistComponent } from '../myplaylist/myplaylist.component';
import { PlaylistService } from 'src/app/playlist.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userApi:any
  
  outAny:User[] = []
 
  constructor(private data:UserDataService, private add:PlaylistService) { }
 
  videoData:video = {} as video
  play:User[] = []
  ngOnInit(): void {
  }

  searchBtn = (fname:string) => {
    console.log(fname)
    this.data.setVar(fname)

    this.data.getInfoFromAPI().subscribe((dataFromApi:User[]) => {
      console.log("Got data from API")
      console.log(dataFromApi)
      
      this.userApi = dataFromApi

      console.log(this.userApi["list"])
      this.outAny = this.userApi["list"]

    })

  }
 
}
