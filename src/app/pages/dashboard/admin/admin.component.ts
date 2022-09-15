import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { IMainForm } from './main-form.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {
  form = new FormGroup<IMainForm>({
    matTextBox: new FormControl<number>(10000, {
      validators: [Validators.minLength(4), Validators.maxLength(8)],
      nonNullable: true,
    }),
    matSelect: new FormControl<string>('1', {
      validators: [Validators.minLength(4), Validators.maxLength(8)],
      nonNullable: true,
    }),
  });

  constructor() {}
}
