import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UserTemplateComponent } from './user-template/user-template.component';

let defaultRoute: Route = AppComponent.getDefaultRoute();

const routes: Routes = [
  defaultRoute,
  {
    path: 'authentication',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'reset',
        component: ResetPasswordComponent,
      },
    ],
  },

  {
    path: 'user',
    component: UserTemplateComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      },
      {
        path: 'coupens',
        loadChildren: () =>
          import('./coupens/coupens.module').then((m) => m.CoupensModule),
      },
      {
        path: 'pages',
        component: PagesComponent,
      },
      {
        path: 'media',
        component: MediaComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
