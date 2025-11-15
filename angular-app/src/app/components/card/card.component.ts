import { Component, computed, input, output } from '@angular/core';
import { ButtonType, CardVariant } from '../../data-type/data-type';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  title = input<string>();
  content = input<string>();
  imgUrl = input<string>();
  showButton = input<boolean>(true);
  buttonLabel = input<string>();
  buttonIcon = input<string>();
  cardButtonClicked = output<void>();
  cardVariant = input<CardVariant>(CardVariant.Default);
  buttonType = computed(() => {
    return this.cardVariant() === this.cardVariantEnum.Default
      ? this.buttonTypeEnum.Primary
      : this.buttonTypeEnum.Secondary;
  });
  cardVariantEnum = CardVariant;
  buttonTypeEnum = ButtonType;
  onCardButtonClick(): void {
    this.cardButtonClicked.emit();
  }

  setButtonType() {
    return this.cardVariant() === this.cardVariantEnum.Default
      ? this.buttonTypeEnum.Primary
      : this.buttonTypeEnum.Secondary;
  }
}
