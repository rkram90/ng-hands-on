import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cdr',
    loadChildren: () =>
      import('src/app/cdr/todos-app/todos.routes').then((m) => m.TODO_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('src/app/content-projection/content-projection.routes').then(
        (m) => m.CONTENT_PROJECTION_ROUTES
      ),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('src/app/form/form.routes').then((m) => m.FORMS_ROUTES),
  },
  {
    path: 'web-worker',
    loadComponent: () =>
      import(
        'src/app/paint-img-by-web-worker/paint-img-by-web-worker.component'
      ).then((m) => m.PaintImgByWebWorkerComponent),
  },
  {
    path: 'ag-grid',
    loadChildren: () =>
      import('src/app/ag-grid/ag-grid.routes').then((m) => m.GRID_ROUTES),
  },
];
