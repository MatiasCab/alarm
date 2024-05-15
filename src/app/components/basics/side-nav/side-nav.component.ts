import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { VariableCardComponent } from '../variable-card/variable-card.component';
import { INode } from '../../../interfaces/INode';
import { NodeService } from '../../../services/node.service';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [SearchBarComponent, VariableCardComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent implements OnInit{

  @Output() moveItemEvent = new EventEmitter<INode>();

  constructor(private nodeService:NodeService) { }

  ngOnInit(){
    this.nodeService.getNodes().subscribe((data: INode[]) => {
      this.nodes = data;
      this.filteredNodes = this.nodes;
    });
  }
  moveItem(item: INode) {
    this.moveItemEvent.emit(item);
  }


  private bagdeNames = ["Diagnostico", "Evidencia"]
  private bagdeColors = ["red"]

  searchWord(word: string) {
    this.filteredNodes = this.nodes.filter(v => v.id.toLowerCase().includes(word.toLowerCase()))
  }


  nodes: INode[] = [];

  filteredNodes = this.nodes;
}
