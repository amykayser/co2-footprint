import { Routes } from '@angular/router';
import {ImpressumComponent} from './pages/impressum/impressum.component';
import {DatenschutzComponent} from './pages/datenschutz/datenschutz.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'impressum', component: ImpressumComponent,
  }, {
    path: 'datenschutz', component: DatenschutzComponent,
  }, {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }, {
    path: 'home', component: HomeComponent
  }
];
