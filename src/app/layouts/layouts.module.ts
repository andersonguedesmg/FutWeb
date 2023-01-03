import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MasterPageComponent, AuthenticationComponent],
  imports: [CommonModule, RouterModule, SharedModule, AngularMaterialModule],
})
export class LayoutsModule {}
