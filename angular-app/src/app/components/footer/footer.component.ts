import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer">
      <p>
        &copy; 2025 Car World. All rights reserved. | Driving passion, one car
        at a time.
      </p>
    </footer>
  `,
  styles: [`
    .footer {
      background: #1a1a1a;
      color: white;
      text-align: center;
      padding: 2rem 0;
    }
  `],
})
export class FooterComponent {

}
