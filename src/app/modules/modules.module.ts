import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, SharedModule, AngularMaterialModule],
})
export class ModulesModule {}
