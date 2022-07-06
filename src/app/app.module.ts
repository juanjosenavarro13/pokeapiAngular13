import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import * as $ from 'jquery';
import { HeaderComponent } from './modules/header/header.component';
import { HeaderModule } from './modules/header/header.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
