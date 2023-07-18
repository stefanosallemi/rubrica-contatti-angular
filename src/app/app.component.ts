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
    } else {
      window.location.reload();
    }
  }
  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 10);
  }

  effettuaRicerca(query: string) {
    this.query = query;
    this.contattiService.effettuaRicerca(this.query);
  }
}
