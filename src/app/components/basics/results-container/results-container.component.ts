import { Component, Input } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CollapseComponent } from '../collapse/collapse.component';
import { IPredictedNode } from '../../../interfaces/IPredictedNode';

@Component({
  selector: 'app-results-container',
  standalone: true,
  imports: [SearchBarComponent, CollapseComponent],
  templateUrl: './results-container.component.html',
  styleUrl: './results-container.component.scss'
})
export class ResultsContainerComponent {
  @Input() nodes?: IPredictedNode[];

  getDiagnosisNodes(){
    return this.nodes?.filter(n => n.type === "Diagnostico");
  }
  getEvidenceNodes(){
    return this.nodes?.filter(n => n.type === "Evidencia");
  }
  getIntermediateNodes(){
    return this.nodes?.filter(n => n.type === "Intermedio");
  }

  searchWord(word: string) {
    //this.filteredVariables = this.medicalVariables.filter(v => v.name.toLowerCase().includes(word.toLowerCase()))
  }
}
