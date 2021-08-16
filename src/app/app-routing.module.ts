import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MyplaylistComponent } from './components/myplaylist/myplaylist.component';


const routes: Routes = [
  {path:"home", component:HomepageComponent},
  {path:"Myplaylist", component: MyplaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
