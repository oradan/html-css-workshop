import { Component, inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CarDto } from '../../data-type/car-data';
import { HeaderComponent } from '../../components/header/header.component';
import { CarItemComponent } from '../../components/car-item/car-item.component';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [HeaderComponent, CarItemComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent {
  readonly carsService: CarService = inject(CarService);

  headerContent =
    'Explore our comprehensive collection of vehicles from every category and era';
  headerBgUrl = 'header-bg-cars.jpg';

  cars!: CarDto[];

  ngOnInit(): void {
    this.cars = this.carsService.fetchCars();
  }
}
