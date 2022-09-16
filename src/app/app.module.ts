import { OverlayContainer } from '@angular/cdk/overlay';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HotToastModule } from '@ngneat/hot-toast';

import { CoreModule } from '@core/core.module';

import { ThemeModule } from '@theme/theme.module';
import { ThemeService } from '@theme/theme.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SubscribeModule } from '@ngneat/subscribe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ANGULAR_MATERIAL_MODULES } from './@shared';

const ANGULAR_MODULES = [
  CommonModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  AppRoutingModule,
];

const CUSTOM_MODULES = [CoreModule, ThemeModule];
const THIRD_PARTY_MODULES = [HotToastModule.forRoot(), SubscribeModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...ANGULAR_MODULES,
    ...CUSTOM_MODULES,
    ...THIRD_PARTY_MODULES,
    ...ANGULAR_MATERIAL_MODULES,
  ],
  exports: [...CUSTOM_MODULES, ...ANGULAR_MODULES],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    overlayContainer: OverlayContainer,
    private _themeService: ThemeService
  ) {
    this._themeService.isLightTheme$.subscribe((isLightTheme) => {
      if (isLightTheme) {
        overlayContainer.getContainerElement().classList.add('.light-theme');
      }
    });
  }
}
