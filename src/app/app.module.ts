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

const ANGULAR_MODULES = [
  CommonModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  AppRoutingModule,
];

const CUSTOM_MODULES = [CoreModule, ThemeModule];
const THIRD_PARTY_MODULES = [HotToastModule.forRoot()];

@NgModule({
  declarations: [AppComponent],
  imports: [...ANGULAR_MODULES, ...CUSTOM_MODULES, ...THIRD_PARTY_MODULES],
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
