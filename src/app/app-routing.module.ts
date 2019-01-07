import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CodingComponent } from './coding/coding.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  	{ path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'dashboard/:id', component: DashboardComponent },
    { path: 'coding/:id', component: CodingComponent },
    { path: 'chat/:id', component: ChatComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
