import { Component } from '@angular/core';
import { ContattiService } from '../services/contatti.service';
import { Contatto } from '../models/contatto.model';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.scss']
})
export class RicercaComponent {
  query!: string;
  contattiFiltrati: Contatto[] = [];

  constructor(
    private contattiService: ContattiService,
    private router: Router,
  ) { }

  effettuaRicerca() {
    this.contattiService.effettuaRicerca(this.query);

    setTimeout(() => {
      window.location.reload();
    });
  }
}
