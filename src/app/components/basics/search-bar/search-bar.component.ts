import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() wordMaker = new EventEmitter<string>();

  keyPress(word: any) {
    console.log(word)
    this.wordMaker.emit(word);
  }
}
