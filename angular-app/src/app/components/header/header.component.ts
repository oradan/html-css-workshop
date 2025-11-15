import { Component, input, output } from '@angular/core';
import { ButtonType } from '../../data-type/data-type';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = input<string>();
  content = input<string>();
  bgImgUrl = input<string>();
  showButton = input<boolean>(true);
  buttonLabel = input<string>();
  buttonIcon = input<string>();
  headerButtonClicked = output<void>();
  buttonType = ButtonType.Orange

  onHeaderButtonClick(): void {
    this.headerButtonClicked.emit();
  }
}
