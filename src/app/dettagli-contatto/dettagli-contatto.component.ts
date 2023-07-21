import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Contatto } from "../models/contatto.model";
import { ContattiService } from '../services/contatti.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dettagli-contatto',
  templateUrl: './dettagli-contatto.component.html',
  styleUrls: ['./dettagli-contatto.component.scss']
})
export class DettagliContattoComponent implements OnInit, OnDestroy {
  contattoSelezionato: Contatto | null = null;
  contatti: Contatto[] = [];
  contattiSubscription: Subscription;

  constructor(private route: ActivatedRoute, private contattiService: ContattiService) { }

  ngOnInit() {
    this.contattiSubscription = this.contattiService.contattiSubject.subscribe((contatti: Contatto[]) => {
      this.contatti = contatti;
      const contattoId = this.route.snapshot.paramMap.get('id');
      this.contattoSelezionato = this.contatti.find(contatto => contatto.id.toString() === contattoId) || null;
    });

    this.contattiService.ottieniContatti();
  }

  salvaContatto(id: number) {
    const contattoModificato = this.contatti.find(contatto => contatto.id === id);
    if (contattoModificato) {
      this.contattiService.aggiungiContatto(contattoModificato);
    }
  }

  eliminaContatto(id: number) {
    this.contattiService.confermaEliminazione(true);
  }

  ngOnDestroy() {
    this.contattiSubscription.unsubscribe();
  }
}
