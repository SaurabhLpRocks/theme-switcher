import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from '@theme/theme.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ANGULAR_MATERIAL_MODULES } from '@shared/angular-material-modules.const';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    ThemeModule,
    ANGULAR_MATERIAL_MODULES,
  ],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
