import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { VariableCardComponent } from '../variable-card/variable-card.component';
import { ResultCardComponent } from '../result-card/result-card.component';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [CommonModule, NgbCollapseModule, ResultCardComponent],
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.scss'
})
export class CollapseComponent {
  isCollapsed = true;
  isArrowDown = false;

  toggleArrow() {
    this.isArrowDown = !this.isArrowDown;
    this.isCollapsed = !this.isCollapsed;
  }

  medicalVariables = [1, 2, 3, 4  ]
}
