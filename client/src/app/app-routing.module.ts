import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CodingComponent } from './coding/coding.component';
import { ChatComponent } from './chat/chat.component';
import { SettingsComponent } from './dashboard/settings/settings.component';

const routes: Routes = [
  	{ path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'coding', component: CodingComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'settings', component: SettingsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
