import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Theme } from './theme.constants';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _lightTheme = new BehaviorSubject<boolean>(false);
  private _activeTheme = new BehaviorSubject<Theme>(Theme.Light);
  isLightTheme$ = this._lightTheme.asObservable();

  activeTheme$ = this._activeTheme.asObservable();

  setLightTheme(isLightTheme: boolean): void {
    this._lightTheme.next(isLightTheme);
    if (isLightTheme) {
      this._activeTheme.next(Theme.Dark);
    } else {
      this._activeTheme.next(Theme.Light);
    }
  }
}
