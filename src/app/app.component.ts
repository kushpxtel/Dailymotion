import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';
import { HttpClient } from '@angular/common/http';
import User from './models/User';
import video from './models/Video';
import { Observable } from 'rxjs';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
  
    constructor(private data:UserDataService) { }

    ngOnInit() {
     
    }

    
}