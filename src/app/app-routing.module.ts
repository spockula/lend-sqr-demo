import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: { showHeader: false, showSidebar: false }
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    data: { showHeader: true, showSidebar: true }
  },
  {
    path: "",
    component: LoginComponent,
    data: { showHeader: false, showSidebar: false }
  },
  {
    path: "details/:id",
    component: UserDetailsComponent,
    data: { showHeader: true, showSidebar: true }
  },
  {
    path: "all-users",
    component: AllUsersComponent,
    data: { showHeader: true, showSidebar: true }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
