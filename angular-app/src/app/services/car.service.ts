import { Injectable } from '@angular/core';
import { CarDto, CarOptionDto } from '../data-type/car-data';
import { cars } from '../../resources/cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  fetchCars(): CarDto[] {
    return cars;
  }

  calculateTotalPrice(basePrice: number, options: CarOptionDto[]): number {

    const selectedOptionsTotal = options
      .filter(option => option.selected)
      .reduce((sum, option) => sum + option.price, 0);

    return basePrice + selectedOptionsTotal;
  }
}
