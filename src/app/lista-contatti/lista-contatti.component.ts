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
  }

  caricaContatti() {
    this.contattiService.getContattiObservable().subscribe(contatti => {
      this.contatti = contatti;
      this.filtraContatti();
    });

    const queryParam = this.route.snapshot.queryParamMap.get('query');
    if (queryParam) {
      this.filtraContatti(queryParam.toLowerCase());
    }
  }
  filtraContatti(query?: string) {
    if (query) {
      this.contattiFiltrati = this.contattiService.ricercaContatti(query);
    } else {
      this.contattiFiltrati = this.contatti;
    }
  }
  

  eliminaContatto(id: number) {
    this.contattiService.eliminaContatto(id);
  }


  idContattoInEliminazione: number | null = null;

  mostraConfermaEliminazione(contatto: Contatto) {
    this.idContattoInEliminazione = contatto.id;
    this.contattiService.confermaEliminazione(true);
  }

  /* salvaPosizionamento(event: any) {
    this.contattiOrdine = event.value.map((contatto: Contatto) => contatto.id);

    this.contattiFiltrati.sort((a: Contatto, b: Contatto) => {
      const nomeA = a.nome.toLowerCase();
      const nomeB = b.nome.toLowerCase();
      return nomeA.localeCompare(nomeB);
    });

    localStorage.setItem('contattiOrdine', JSON.stringify(this.contattiOrdine));
  }

  riordinaContatti() {
    if (this.contattiOrdine.length > 0) {
      this.contattiFiltrati.sort((a: Contatto, b: Contatto) => {
        const indexA = this.contattiOrdine.indexOf(a.id);
        const indexB = this.contattiOrdine.indexOf(b.id);
        return indexA - indexB;
      });
    }
  } */
}
