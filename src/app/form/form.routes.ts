import { Routes } from '@angular/router';
import { FormBuilderComponent } from './reuse-form/form-builder/form-builder.component';

export const FORMS_ROUTES: Routes = [
  {
    path: '',
    component: FormBuilderComponent,
  },
  {
    path: 'reuse-form',
    component: FormBuilderComponent,
  },
];
