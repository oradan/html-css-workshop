import { Component, input } from '@angular/core';
import { CarDto, CarOptionDto } from '../../data-type/car-data';
import { ButtonType } from '../../data-type/data-type';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CurrencyPipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-car-item',
  standalone: true,
  imports: [CheckboxComponent, CurrencyPipe, ButtonComponent],
  templateUrl: './car-item.component.html',
  styleUrl: './car-item.component.css',
})
export class CarItemComponent {
  carItem = input.required<CarDto>();
  readonly buttonType = ButtonType;
  onSelectedOption() {}
  addToFavorites() {}
}
