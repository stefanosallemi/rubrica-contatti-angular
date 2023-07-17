import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Contatto } from "../models/contatto.model";

@Component({
  selector: 'app-dettagli-contatto',
  templateUrl: './dettagli-contatto.component.html',
  styleUrls: ['./dettagli-contatto.component.scss']
})
export class DettagliContattoComponent implements OnInit {
  contattoSelezionato: Contatto | null = null;
  contatti: Contatto[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const contattiSalvati = localStorage.getItem('contatti');
    if (contattiSalvati) {
      this.contatti = JSON.parse(contattiSalvati);
      const contattoId = this.route.snapshot.paramMap.get('id');
      this.contattoSelezionato = this.contatti.find(contatto => contatto.id.toString() === contattoId) || null;
    }
  }

  salvaContatto(id: number) {
    const contattoModificato = this.contatti.find(contatto => contatto.id === id);
    if (contattoModificato) {
      localStorage.setItem('contatti', JSON.stringify(this.contatti));
      window.location.reload();
    }
  }

  eliminaContatto(id: number) {
    this.contatti = this.contatti.filter(contatto => contatto.id !== id);
    localStorage.setItem('contatti', JSON.stringify(this.contatti));
    window.location.href = '/contatti';
  }
}
