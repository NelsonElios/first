import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MoviesPage} from "../pages/movies/movies";
import {MovieDetailPage} from "../pages/movie-detail/movie-detail";
import {MovieListPage} from "../pages/movie-list/movie-list";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MoviesPage,
    MovieDetailPage,
    MovieListPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
