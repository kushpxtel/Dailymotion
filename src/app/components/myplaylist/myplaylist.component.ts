import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { UserDataService } from 'src/app/user-data.service';
import User from 'src/app/models/User';

@Component({
  selector: 'app-myplaylist',
  templateUrl: './myplaylist.component.html',
  styleUrls: ['./myplaylist.component.css']
})
export class MyplaylistComponent implements OnInit {

  currPlaylist:User[] = []
  info:string = "" 
  constructor(private data:UserDataService) { }

  ngOnInit(): void {
  }
  

  // GetVideoBtn = () => {
  //   this.currPlaylist = this.data.getPlaylist()
  //   console.log(this.currPlaylist)
  // }

}
 