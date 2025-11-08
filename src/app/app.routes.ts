
import { Routes } from '@angular/router';
import { fromEvent } from 'rxjs';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
    //To do GUARDS

  },

  {
    path: '',
    loadChildren: ()=> import ('./store-front/store-front.routes'),
  },

];
