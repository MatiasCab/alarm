import { Component, Input, OnInit } from '@angular/core';
import {
  IOutcomeData,
  IPredictedNode,
} from '../../../interfaces/IPredictedNode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.scss',
})
export class ResultCardComponent {
  @Input() node?: IPredictedNode;
}
