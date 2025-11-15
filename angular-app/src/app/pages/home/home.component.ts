import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AppRoutes } from '../../data-type/data-type';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly utilsService = inject(UtilsService);
  headerContent =
    'Discover the latest automotive trends, news, and the most exciting cars in the industry';
  headerBgUrl = 'header-bg.jpg';
  appRoutesEnum = AppRoutes;
  navigateTo(route: AppRoutes) {
    this.utilsService.navigateTo(route);
  }
}
