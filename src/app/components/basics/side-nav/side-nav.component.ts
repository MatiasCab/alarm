import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { VariableCardComponent } from '../variable-card/variable-card.component';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [SearchBarComponent, VariableCardComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  private bagdeNames = ["Diagnostico", "Evidencia"]
  private bagdeColors = ["red"]


  medicalVariables = [
    {
      name: "Heart",
      info: "efñoqedqoeeeeeeq inowqqqqqqqq qwindqpnwdnqwd qwndqonwd",
      badge: {
        name: this.bagdeNames[0],
        color: this.bagdeColors[0]
      }
    },
    {
      name: "Heart 2",
      info: "efñoqedqoeeeeeeq inowqqqqqqqq qwindqpnwdnqwd qwndqonwd",
      badge: {
        name: this.bagdeNames[1],
        color: this.bagdeColors[0]
      }
    },
    {
      name: "Heart 2",
      info: "efñoqedqoeeeeeeq inowqqqqqqqq qwindqpnwdnqwd qwndqonwd",
      badge: {
        name: this.bagdeNames[1],
        color: this.bagdeColors[0]
      }
    }
  ]

}
