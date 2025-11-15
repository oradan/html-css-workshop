import { inject, Injectable } from '@angular/core';
import { AppRoutes } from '../data-type/data-type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  private readonly router = inject(Router);
  navigateTo(route: AppRoutes) {
    return this.router.navigate([`/${route}`]);
  }
}
