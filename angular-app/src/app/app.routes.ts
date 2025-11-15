import { Routes } from '@angular/router';
import { AppRoutes } from './data-type/data-type';
import { HomeComponent } from './pages/home/home.component';
import { CarsComponent } from './pages/cars/cars.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
  { path: '', redirectTo: `./${AppRoutes.Home}`, pathMatch: 'full' },
  { path: AppRoutes.Home, component: HomeComponent },
  { path: AppRoutes.News, component: NewsComponent },
  { path: AppRoutes.Cars, component: CarsComponent },
];
