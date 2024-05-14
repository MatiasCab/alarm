import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { INode } from '../../../interfaces/INode';
import { IDataToPredict } from '../../../interfaces/IDataToPredict';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.scss'
})
export class MainCardComponent {
@Input() node!: INode;
@Output() removeNode = new EventEmitter<INode>();
@ViewChild('selectedValue') selectedValue!: ElementRef;

removeItem() {
  this.removeNode.emit(this.node);
};

getSelectedValue(): string{
  return this.selectedValue.nativeElement.value;
}

getDataToPredict(): IDataToPredict{

  let data: IDataToPredict = {
    variable: this.node.id,
    result: this.getSelectedValue()
  } 
  
  return data;
}

}
