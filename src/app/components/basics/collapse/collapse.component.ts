import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { VariableCardComponent } from '../variable-card/variable-card.component';
import { ResultCardComponent } from '../result-card/result-card.component';
import { IPredictedNode } from '../../../interfaces/IPredictedNode';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [CommonModule, NgbCollapseModule, ResultCardComponent],
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.scss'
})
export class CollapseComponent {
  @Input() nodes?: IPredictedNode[];
  @Input() title?: string;


  isCollapsed = true;
  isArrowDown = false;

  toggleArrow() {
    this.isArrowDown = !this.isArrowDown;
    this.isCollapsed = !this.isCollapsed;
  }

}
