import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MyplaylistComponent } from './components/myplaylist/myplaylist.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListingComponent } from './components/listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MyplaylistComponent,
    NavigationComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
