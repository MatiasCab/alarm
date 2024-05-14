import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VariableCardComponent } from './components/basics/variable-card/variable-card.component';
import { SideNavComponent } from './components/basics/side-nav/side-nav.component';
import { MainContentComponent } from './components/basics/main-content/main-content.component';
import { INode } from './interfaces/INode';
import { ResultsContainerComponent } from './components/basics/results-container/results-container.component';
import { IPredictedNode } from './interfaces/IPredictedNode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VariableCardComponent, SideNavComponent, MainContentComponent, ResultsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alarm';
  options = ['Option 1', 'Option 2', 'Option 3'];
  predictedNodes: IPredictedNode[] = [];
  nodes: INode[] = [];
  moveItem(node: INode) {
    if(!this.nodes.includes(node))
    this.nodes.push(node);
  }
  removeItem(node: INode) {
    this.nodes = this.nodes.filter(n =>{
      return n !== node
    }
  );
};

movePredictedNodes(predictedNodes: IPredictedNode[]){
  this.predictedNodes = predictedNodes;
}

}
