import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Aggiungi questa riga
import { Contatto } from "../models/contatto.model";

@Component({
  selector: 'app-dettagli-contatto',
  templateUrl: './dettagli-contatto.component.html',
  styleUrls: ['./dettagli-contatto.component.scss']
})
export class DettagliContattoComponent implements OnInit {
  contattoSelezionato: Contatto | null = null;
  contatti: Contatto[] = [];
  contattoForm: FormGroup; // Aggiungi questa riga

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { } // Aggiungi FormBuilder

  ngOnInit() {
    const contattiSalvati = localStorage.getItem('contatti');
    if (contattiSalvati) {
      this.contatti = JSON.parse(contattiSalvati);
      const contattoId = this.route.snapshot.paramMap.get('id');
      this.contattoSelezionato = this.contatti.find(contatto => contatto.id.toString() === contattoId) || null;
    }

    // Inizializza il FormGroup e i validatori
    this.contattoForm = this.fb.group({
      nome: [this.contattoSelezionato?.nome || '', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
      cognome: [this.contattoSelezionato?.cognome || '', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
      email: [this.contattoSelezionato?.email || '', [Validators.required, Validators.email]],
    });
  }

  salvaContatto(id: number) {
    const contattoModificato = this.contatti.find(contatto => contatto.id === id);
    if (contattoModificato) {
      // Salvataggio delle modifiche solo se il form è valido
      if (this.contattoForm.valid) {
        contattoModificato.nome = this.contattoForm.value.nome;
        contattoModificato.cognome = this.contattoForm.value.cognome;
        contattoModificato.email = this.contattoForm.value.email;

        localStorage.setItem('contatti', JSON.stringify(this.contatti));
        window.location.reload();
      }
    }
  }
}
