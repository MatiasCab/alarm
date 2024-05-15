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
  word?: string;

  getDiagnosisNodes(){
    return this.nodes?.filter(n => this.filterCriteria("Diagnostico", n));
  }
  getEvidenceNodes(){
    return this.nodes?.filter(n => this.filterCriteria("Evidencia", n));
  }
  getIntermediateNodes(){
    return this.nodes?.filter(n => this.filterCriteria("Intermedio", n));
  }

  searchWord(word: string) {
    this.word = word;
  }

  filterCriteria(type: string, node: IPredictedNode) {
    let haveWord = true
    if(this.word) {
      haveWord = node.id.toLowerCase().includes(this.word.toLowerCase())
    }
    return node.type === type && haveWord
  }
}
