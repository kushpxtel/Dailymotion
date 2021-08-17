import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from './models/User';
import { Observable } from 'rxjs';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  
  // videoListObser = new BehaviorSubject<User[]>([])
  temp:any
  curName:string = ""
 

  constructor(private http:HttpClient) { }

setVar = (fname:string) => {
  this.curName = fname
  console.log(`Color updated to: ${this.curName}`)
}

  getVar = () => {
    return this.curName
  }
  
  //searchBtn = (fname:string) => {
   // this.curName = fname
    //console.log(this.curName)
    //console.log("abc")
  //}


  getInfoFromAPI = ():Observable<User[]> => {
    return this.http.get<User[]>('https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=?'+this.curName)
  
  }
}

