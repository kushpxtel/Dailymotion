import { Component, OnInit, Input} from '@angular/core';
import { PlaylistService } from 'src/app/playlist.service';
import User from 'src/app/models/User';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  @Input() currentVid:User = {} as User

  vidPresent:boolean = false
  
  constructor(private add:PlaylistService) { }

  ngOnInit(): void {
  }


  myPlaylistBtn = () => {
    console.log("my Playlist pressed")
    this.add.addVideoPlaylist(this.currentVid)
    this.vidPresent = true
  }
}
