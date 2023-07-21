import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contatto } from '../models/contatto.model';
import { ContattiService } from '../services/contatti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiungi-contatto',
  templateUrl: './aggiungi-contatto.component.html',
  styleUrls: ['./aggiungi-contatto.component.scss']
})
export class AggiungiContattoComponent {
  contatto: Contatto = {
    id: 0,
    nome: '',
    cognome: '',
    email: ''
  };

  @Output() contattoAggiunto = new EventEmitter<Contatto>();
  @ViewChild('contattoForm') contattoForm: NgForm;

  constructor(private contattiService: ContattiService, private router: Router) { }

  salvaContatto() {
    if (this.contattoForm.valid) {
      this.contattiService.aggiungiContatto(this.contatto);
      this.contattoAggiunto.emit(this.contatto);
      this.contatto = {
        id: 0,
        nome: '',
        cognome: '',
        email: ''
      };
      this.contattoForm.resetForm();
      this.router.navigate(['/contatti']);
    } else {
      console.log('Contatto non salvato');
    }
  }
}