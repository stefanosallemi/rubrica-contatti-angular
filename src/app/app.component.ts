import { Component } from '@angular/core';
import { ContattiService } from './services/contatti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lista-contatti';
  checked: boolean = true;
  query: string = '';

  constructor(private contattiService: ContattiService) { }

  ordinaContattiPerNome() {
    if (!this.checked) {
      this.contattiService.ordinaContattiPerNome();
      this.contattiService.effettuaRicerca(this.query);
    } else {
      window.location.reload();
    }
  }

  effettuaRicerca(query: string) {
    this.query = query;
    this.contattiService.effettuaRicerca(this.query);
  }
}
