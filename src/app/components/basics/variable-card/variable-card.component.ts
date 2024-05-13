import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-variable-card',
  standalone: true,
  imports: [BadgeComponent, NgbTooltipModule],
  templateUrl: './variable-card.component.html',
  styleUrl: './variable-card.component.scss'
})
export class VariableCardComponent {
  @Input() title?: string;
  @Input() tooltipInfo?: string;
  @Input() labelTitle?: string;
  @Input() labelColor?: string;
  isActive: boolean = false;

  selectCard() {
    this.isActive = !this.isActive;
  }
}
