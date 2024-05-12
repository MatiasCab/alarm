import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss'
})
export class MainCardComponent {
@Input() type!: string;
@Input() title!: string;
@Input() description!: string;
@Input() options!: string[];
}
