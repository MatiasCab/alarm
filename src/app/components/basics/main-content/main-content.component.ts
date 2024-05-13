import { Component, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MainCardComponent } from '../main-card/main-card.component';
import { INode } from '../../../interfaces/INode';
import { PredictButtonComponent } from '../predict-button/predict-button.component';
import { IDataToPredict } from '../../../interfaces/IDataToPredict';
import { NodeService } from '../../../services/node.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [MainCardComponent, PredictButtonComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
constructor(private nodeService: NodeService) { }
@Input() items!: INode[];
@Output() removeItemEvent = new EventEmitter<INode>();
@ViewChildren(MainCardComponent) queryMainCards!: QueryList<MainCardComponent>;

removeItem(item: INode) {
  this.removeItemEvent.emit(item);
};

predict(){
  let toPredict: IDataToPredict[] = [];
  this.queryMainCards.forEach(mainCard => {
    toPredict.push(mainCard.getDataToPredict());
    console.log(mainCard.getDataToPredict());
  });
  console.log(toPredict);
  this.nodeService.doPrediction(toPredict).subscribe((res: any) => {
    console.log(res);
  });
}

}
