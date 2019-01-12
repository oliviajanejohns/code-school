import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CodingComponent } from './coding/coding.component';
import { RecommendationComponent } from './dashboard/recommendation/recommendation.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { Lesson1Component } from './coding/lesson1/lesson1.component';
import { Lesson2Component } from './coding/lesson2/lesson2.component';
import { Lesson3Component } from './coding/lesson3/lesson3.component';
import { Lesson4Component } from './coding/lesson4/lesson4.component';
import { Lesson5Component } from './coding/lesson5/lesson5.component';
import { Lesson6Component } from './coding/lesson6/lesson6.component';
import { Lesson7Component } from './coding/lesson7/lesson7.component';
import { Lesson8Component } from './coding/lesson8/lesson8.component';
import { Lesson9Component } from './coding/lesson9/lesson9.component';
import { Lesson10Component } from './coding/lesson10/lesson10.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { ChatComponent } from './chat/chat.component';
import { HelpComponent } from './dashboard/help/help.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CarouselComponent,
    CodingComponent,
    RecommendationComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Lesson4Component,
    Lesson5Component,
    Lesson6Component,
    Lesson7Component,
    Lesson8Component,
    Lesson9Component,
    Lesson10Component,
    ChatComponent,
    HelpComponent,
    SettingsComponent,
    SignupComponent, 
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ModalModule.forRoot(),
    BrowserAnimationsModule, 
    CodemirrorModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [   
    BsModalService,
    BsModalRef
  ],
  bootstrap: [AppComponent],
  entryComponents: [ 
    SignupComponent, 
    LoginComponent,
    HelpComponent
  ],
})
export class AppModule { }
