import { Component, OnInit, Input, Output} from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { UserDataService } from 'src/app/user-data.service';
import User from 'src/app/models/User';
import { PlaylistService } from 'src/app/playlist.service';


@Component({
  selector: 'app-myplaylist',
  templateUrl: './myplaylist.component.html',
  styleUrls: ['./myplaylist.component.css']
})
export class MyplaylistComponent implements OnInit {
  @Input() currentVid:User = {} as User
  @Output() currPlaylist:User[] = []
  info:string = "" 
  constructor(private add:PlaylistService) { }

  ngOnInit(): void {
  }
  

  GetVideoBtn = () => {
    this.currPlaylist = this.add.getPlaylist()
    console.log(this.currPlaylist)
  }

  Clear(){
    this.add.removeAll()
  }
  // getPlay = () => {
  //   return this.currPlaylist = this
  // }

}
 