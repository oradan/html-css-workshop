import { Component, computed, inject, input, signal } from '@angular/core';
import { CarDto, CarOptionDto } from '../../data-type/car-data';
import { ButtonType } from '../../data-type/data-type';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CurrencyPipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-item',
  standalone: true,
  imports: [CheckboxComponent, CurrencyPipe, ButtonComponent],
  templateUrl: './car-item.component.html',
  styleUrl: './car-item.component.css',
})
export class CarItemComponent {
  readonly carService: CarService = inject(CarService);
  carItem = input.required<CarDto>();
  readonly buttonType = ButtonType;

  totalPrice = signal<number>(0);
  totalOptionsPrice = computed(() => this.totalPrice() - this.carItem().price);

  ngOnInit(): void {
    this.setTotalPrice();
  }
  onSelectedOption(isSelected: boolean, option: CarOptionDto) {
    option.selected = isSelected;
    this.setTotalPrice();
  }

  setTotalPrice() {
    const totalPrice = this.carService.calculateTotalPrice(
      this.carItem().price,
      this.carItem().options
    );
    this.totalPrice.set(totalPrice);
  }

  addToFavorites() {
    this.carItem().addedToFavorites = !this.carItem().addedToFavorites;
  }
}
