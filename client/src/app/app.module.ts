import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MovieItemComponent} from './components/movie-item/movie-item.component';
import {MovieComponent} from './components/movie/movie.component';
import {DataService} from "./services/data.service";
import {MovieItemImageComponent} from './components/movie-item-image/movie-item-image.component';
import {MovieItemTitleComponent} from './components/movie-item-title/movie-item-title.component';
import {SummaryPipe} from './pipes/summary.pipe';
import {FormsModule} from "@angular/forms";
import {SearchBarComponent} from './shared/search-bar/search-bar.component';
import {MovieHomeComponent} from './components/movie-home/movie-home.component';
import {FilterTextPipe} from './pipes/filter-text.pipe';
import {TextFormatDirective} from './directives/text-format.directive';
import {MovieItemDetailsComponent} from "./components/movie-item-details/movie-item-details.component";
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from "./services/auth.interceptor";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AddmovieComponent} from './components/addmovie/addmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MovieItemDetailsComponent,
    MovieComponent,
    MovieItemImageComponent,
    MovieItemTitleComponent,
    SummaryPipe,
    SearchBarComponent,
    MovieHomeComponent,
    FilterTextPipe,
    TextFormatDirective,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AddmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
