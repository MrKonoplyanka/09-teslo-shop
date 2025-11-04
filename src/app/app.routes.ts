
import { Routes } from '@angular/router';
import { fromEvent } from 'rxjs';

export const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import ('./store-front/store-front.routes'),
  }
];
