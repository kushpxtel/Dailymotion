import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';
import { HttpClient } from '@angular/common/http';
import User from './models/User';
import video from './models/Video';
import { Observable } from 'rxjs';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    // totalAngularPackages: any;
    
    

    constructor(private data:UserDataService) { }

    ngOnInit() {
      {      
        // // Simple GET request with response type <any>
        // this.http.get<User>('https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=wired+tech+support').subscribe(data => {
        //     this.totalAngularPackages = data["list"]
        // })
    }
    }

    
}