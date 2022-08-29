import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { HeaderComponent } from './header/header.component';

// import these to uses them in your template
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    MediaComponent,
    PagesComponent,
    SettingsComponent,
    StatisticsComponent,
    DashboardComponent,
    SublevelMenuComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    CdkMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
