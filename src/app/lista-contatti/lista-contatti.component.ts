import { Component, OnInit } from '@angular/core';
import { Contatto } from '../models/contatto.model';
import { ContattiService } from '../services/contatti.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-contatti',
  templateUrl: './lista-contatti.component.html',
  styleUrls: ['./lista-contatti.component.scss']
})
export class ListaContattiComponent implements OnInit {
  contatti: Contatto[] = [];
  contattiFiltrati: Contatto[] = [];

  constructor(
    private contattiService: ContattiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.caricaContatti();

    this.contattiService.confermaEliminazione$.subscribe(confermato => {
      if (confermato) {
        this.eliminaContatto(this.idContattoInEliminazione)
        if (this.idContattoInEliminazione) {
          this.eliminaContatto(this.idContattoInEliminazione);
          this.idContattoInEliminazione = null;
        }
      }
    });
  }

  caricaContatti() {
    this.contatti = this.contattiService.ottieniContatti();

    const queryParam = this.route.snapshot.queryParamMap.get('query');

    if (queryParam) {
      this.contattiFiltrati = this.contatti.filter(contatto =>
        contatto.nome.toLowerCase().includes(queryParam.toLowerCase())
      );
    } else {
      this.contattiFiltrati = this.contatti;
    }
  }

  eliminaContatto(id: number) {
    this.contattiService.eliminaContatto(id);
    this.caricaContatti();
  }

  idContattoInEliminazione: number | null = null;

  mostraConfermaEliminazione(contatto: Contatto) {
    this.idContattoInEliminazione = contatto.id;
    this.contattiService.confermaEliminazione(true);
  }
}
