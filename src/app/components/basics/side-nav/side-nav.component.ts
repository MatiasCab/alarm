import { Component, EventEmitter, Output } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { VariableCardComponent } from '../variable-card/variable-card.component';
import { INode } from '../../../interfaces/INode';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [SearchBarComponent, VariableCardComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  @Output() moveItemEvent = new EventEmitter<INode>();

  moveItem(item: INode) {
    this.moveItemEvent.emit(item);
  }


  private bagdeNames = ["Diagnostico", "Evidencia"]
  private bagdeColors = ["red"]

  searchWord(word: string) {
    this.filteredNodes = this.nodes.filter(v => v.title.toLowerCase().includes(word.toLowerCase()))
  }


  nodes: INode[] = [
    {
      title: "HREK",
      type: "Diagnostico",
      description: "La información sobre la primera variable La información sobre la tercera variable,La información sobre la tercera variableLa información sobre la tercera variable",
      options: ["Muy Alto", "Alto", "Medio"]
    },
    {
      title: "HRBP",
      type: "Diagnostico",
      description: "La información sobre la segunda variable",
      options: ["Bajo", "Medio", "Alto"]
    },
    {
      title: "PBL",
      type: "Evidencia",
      description: "La información sobre la tercera variable",
      options: ["Alto", "Muy Alto", "Bajo"]
    },
    {
      title: "VMCH",
      type: "Diagnostico",
      description: "La información sobre la cuarta variable",
      options: ["Muy Bajo", "Bajo", "Alto"]
    },
    {
      title: "HRSA",
      type: "Evidencia",
      description: "La información sobre la quinta variable",
      options: ["Medio", "Bajo", "Muy Alto"]
    },
    {
      title: "F",
      type: "Intermedio",
      description: "La información sobre la sexta variable",
      options: ["Bajo", "Medio", "Muy Bajo"]
    },
    {
      title: "G",
      type: "Intermedio",
      description: "La información sobre la séptima variable",
      options: ["Muy Alto", "Alto", "Muy Bajo"]
    }
  ];

  filteredNodes = this.nodes;
}
