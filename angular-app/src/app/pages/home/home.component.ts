import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AppRoutes, CardVariant } from '../../data-type/data-type';
import { UtilsService } from '../../services/utils.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, HeaderComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly utilsService = inject(UtilsService);
  cardVariantEnum = CardVariant;
  headerContent =
    'Discover the latest automotive trends, news, and the most exciting cars in the industry';
  headerBgUrl = 'header-bg.jpg';
  appRoutesEnum = AppRoutes;
  navigateTo(route: AppRoutes) {
    this.utilsService.navigateTo(route);
  }
}
