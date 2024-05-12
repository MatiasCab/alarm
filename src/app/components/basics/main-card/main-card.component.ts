import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss'
})
export class MainCardComponent {
@Input() tag!: string;
@Input() title!: string;
@Input() description!: string;
@Input() options!: string[];
}
