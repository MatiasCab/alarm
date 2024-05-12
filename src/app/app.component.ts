import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VariableCardComponent } from './components/basics/variable-card/variable-card.component';
import { SideNavComponent } from './components/basics/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VariableCardComponent, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alarm';
}
