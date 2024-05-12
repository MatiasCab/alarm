import { Component } from '@angular/core';
import { MainCardComponent } from '../main-card/main-card.component';
import { INode } from '../../../interfaces/INode';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [MainCardComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
items: INode[] = [
  {
    title: "HREK",
    type: "A",
    description: "La información sobre la primera variable La información sobre la tercera variable,La información sobre la tercera variableLa información sobre la tercera variable",
    options: ["Muy Alto", "Alto", "Medio"]
  },
  {
    title: "HRBP",
    type: "B",
    description: "La información sobre la segunda variable",
    options: ["Bajo", "Medio", "Alto"]
  },
  {
    title: "PBL",
    type: "C",
    description: "La información sobre la tercera variable",
    options: ["Alto", "Muy Alto", "Bajo"]
  },
  {
    title: "VMCH",
    type: "D",
    description: "La información sobre la cuarta variable",
    options: ["Muy Bajo", "Bajo", "Alto"]
  },
  {
    title: "HRSA",
    type: "E",
    description: "La información sobre la quinta variable",
    options: ["Medio", "Bajo", "Muy Alto"]
  },
  {
    title: "F",
    type: "F",
    description: "La información sobre la sexta variable",
    options: ["Bajo", "Medio", "Muy Bajo"]
  },
  {
    title: "G",
    type: "G",
    description: "La información sobre la séptima variable",
    options: ["Muy Alto", "Alto", "Muy Bajo"]
  },
  {
    title: "H",
    type: "H",
    description: "La información sobre la octava variable",
    options: ["Muy Bajo", "Bajo", "Muy Alto"]
  }
];
}
