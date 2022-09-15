import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '@shared/shared.module';

import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { MenuListItemComponent } from './components/menu-list-item';
import { SideNavService } from './components/side-nav/side-nav.service';
import {
  FooterComponent,
  HeaderComponent,
  SideNavComponent,
  SpinnerComponent,
} from './components';
import { ThemeService } from './theme.service';

const ANGULAR_MATERIAL_MODULES = [
  MatBadgeModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatTooltipModule,
];

const ANGULAR_MODULES = [CommonModule, RouterModule];

const THIRD_PARTY_MODULES = [FontAwesomeModule];

const COMPONENTS = [
  DefaultLayoutComponent,
  FooterComponent,
  HeaderComponent,
  SideNavComponent,
  SpinnerComponent,
  MenuListItemComponent,
];

@NgModule({
  imports: [
    ...ANGULAR_MODULES,
    ...THIRD_PARTY_MODULES,
    SharedModule,
    ...ANGULAR_MATERIAL_MODULES,
  ],
  exports: [...COMPONENTS, ...THIRD_PARTY_MODULES],
  declarations: [...COMPONENTS],
  providers: [ThemeService, SideNavService],
})
export class ThemeModule {
  public static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [],
    };
  }
}
