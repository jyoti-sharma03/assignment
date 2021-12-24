import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { OngoingApplicationComponent } from './ongoing-application/ongoing-application.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppContainerComponent,
    OpportunitiesComponent,
    OngoingApplicationComponent,
    NotificationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
