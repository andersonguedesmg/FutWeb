import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './layouts/pages/master-page/master-page.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    // canActivate: [AuthGuard],
  },
  // {
  //   path: '',
  //   component: AuthenticationComponent,
  //   children: [
  //     { path: '', redirectTo: 'login', pathMatch: 'full' },
  //     { path: 'login', component: LoginComponent },
  //   ],
  // },
  // { path: '404', component: NotFoundComponent },
  // { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
