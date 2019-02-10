import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CodingComponent } from './coding/coding.component';
import { ChatComponent } from './chat/chat.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  	{ path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'coding', component: CodingComponent, canActivate: [AuthGuard] },
    { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/settings', component: SettingsComponent, canActivate: [AuthGuard]},
      // otherwise redirect to home
    // { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
