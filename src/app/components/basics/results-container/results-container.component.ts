import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CollapseComponent } from '../collapse/collapse.component';

@Component({
  selector: 'app-results-container',
  standalone: true,
  imports: [SearchBarComponent, CollapseComponent],
  templateUrl: './results-container.component.html',
  styleUrl: './results-container.component.scss'
})
export class ResultsContainerComponent {

  searchWord(word: string) {
    //this.filteredVariables = this.medicalVariables.filter(v => v.name.toLowerCase().includes(word.toLowerCase()))
  }
}
