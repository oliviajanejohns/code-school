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
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { ChatComponent } from './chat/chat.component';
import { HelpComponent } from './dashboard/help/help.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { JwtInterceptorProvider } from './_helpers/jwt.interceptor';
import { AuthGuard } from './_guards/auth.guard';
import { IntroComponent } from './coding/content/intro/intro.component';
import { FriendsComponent } from './dashboard/friends/friends.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { Exercise1Component } from './coding/content/lessons/chapter1/exercise1/exercise1.component';
import { Lesson1Component } from './coding/content/lessons/chapter1/lesson1/lesson1.component';
import { Lesson2Component } from './coding/content/lessons/chapter1/lesson2/lesson2.component';
import { Lesson3Component } from './coding/content/lessons/chapter1/lesson3/lesson3.component';
import { Lesson4Component } from './coding/content/lessons/chapter1/lesson4/lesson4.component';
import { Lesson5Component } from './coding/content/lessons/chapter1/lesson5/lesson5.component';
import { Lesson6Component } from './coding/content/lessons/chapter2/lesson6/lesson6.component';
import { Lesson7Component } from './coding/content/lessons/chapter2/lesson7/lesson7.component';
import { Lesson8Component } from './coding/content/lessons/chapter2/lesson8/lesson8.component';
import { Lesson9Component } from './coding/content/lessons/chapter2/lesson9/lesson9.component';
import { Lesson10Component } from './coding/content/lessons/chapter2/lesson10/lesson10.component';
import { Lesson11Component } from './coding/content/lessons/chapter3/lesson11/lesson11.component';
import { Lesson12Component } from './coding/content/lessons/chapter3/lesson12/lesson12.component';
import { Lesson13Component } from './coding/content/lessons/chapter3/lesson13/lesson13.component';
import { Lesson14Component } from './coding/content/lessons/chapter3/lesson14/lesson14.component';
import { Lesson15Component } from './coding/content/lessons/chapter4/lesson15/lesson15.component';
import { Lesson16Component } from './coding/content/lessons/chapter4/lesson16/lesson16.component';
import { Lesson17Component } from './coding/content/lessons/chapter4/lesson17/lesson17.component';
import { Lesson18Component } from './coding/content/lessons/chapter4/lesson18/lesson18.component';
import { Lesson19Component } from './coding/content/lessons/chapter5/lesson19/lesson19.component';
import { Lesson20Component } from './coding/content/lessons/chapter5/lesson20/lesson20.component';
import { Lesson21Component } from './coding/content/lessons/chapter5/lesson21/lesson21.component';
import { Lesson22Component } from './coding/content/lessons/chapter5/lesson22/lesson22.component';
import { Lesson23Component } from './coding/content/lessons/chapter5/lesson23/lesson23.component';
import { Exercise2Component } from './coding/content/lessons/chapter2/exercise2/exercise2.component';
import { Exercise3Component } from './coding/content/lessons/chapter3/exercise3/exercise3.component';
import { Exercise4Component } from './coding/content/lessons/chapter4/exercise4/exercise4.component';
import { DeleteComponent } from './dashboard/settings/delete/delete.component';
import { AvatarModule } from 'ngx-avatar';
import { SidebarComponent } from './coding/sidebar/sidebar.component';
import { CompletedComponent } from './coding/content/completed/completed.component';
import { Exercise5Component } from './coding/content/lessons/chapter5/exercise5/exercise5.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CarouselComponent,
    CodingComponent,
    RecommendationComponent,
    ChatComponent,
    HelpComponent,
    SettingsComponent,
    SignupComponent, 
    FriendsComponent,
    LoginComponent, 
    IntroComponent,
    Exercise1Component, 
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
    Lesson11Component, 
    Lesson12Component, 
    Lesson13Component, 
    Lesson14Component, 
    Lesson15Component, 
    Lesson16Component, 
    Lesson17Component, 
    Lesson18Component, 
    Lesson19Component, 
    Lesson20Component, 
    Lesson21Component, 
    Lesson22Component, 
    Lesson23Component, 
    Exercise2Component,
    Exercise3Component,
    Exercise4Component,
    DeleteComponent,
    SidebarComponent,
    CompletedComponent,
    Exercise5Component,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ModalModule.forRoot(),
    BrowserAnimationsModule, 
    CodemirrorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    AvatarModule
  ],
  providers: [   
    BsModalService,
    BsModalRef,
    JwtInterceptorProvider,
    AuthGuard,
    UserService,
    AuthenticationService,
    AlertService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ 
    SignupComponent, 
    LoginComponent,
    HelpComponent,
    FriendsComponent,
    DeleteComponent
  ],
})
export class AppModule { }
