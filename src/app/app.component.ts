import { Component } from '@angular/core';
import { MicomponenteComponent } from './components/micomponente/micomponente.component';

@Component({
  selector: 'app-root',
  imports: [MicomponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spring';
}
