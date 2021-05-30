import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
const routes: Routes = [
  { path: 'github', component: GithubComponent },
  { path: 'about', component: AboutComponent },
  { path: "" , redirectTo:"/github",pathMatch:"full"}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
