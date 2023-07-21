import { Component } from '@angular/core';
import { ContattiService } from '../services/contatti.service';
import { Contatto } from '../models/contatto.model';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.scss']
})
export class RicercaComponent {
  query: string;
  contattiFiltrati: Contatto[] = [];

  constructor(
    private contattiService: ContattiService,
  ) { }

  effettuaRicerca() {
    this.contattiService.ricercaContatti(this.query);
  }
}