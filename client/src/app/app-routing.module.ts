import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieHomeComponent} from "./components/movie-home/movie-home.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./services/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {AddmovieComponent} from "./components/addmovie/addmovie.component";
import {MovieItemDetailsComponent} from "./components/movie-item-details/movie-item-details.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movie',
    component: MovieHomeComponent
  },
  {
    path: 'movie/detail/:id',
    component: MovieItemDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'addmovie',
    component: AddmovieComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
