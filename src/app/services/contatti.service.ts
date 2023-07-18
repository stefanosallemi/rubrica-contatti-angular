import { Injectable } from '@angular/core';
import { Contatto } from '../models/contatto.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {
  private contatti: Contatto[] = [];
  private ordinatoPerNome: boolean = false;
  contattiFiltrati: Contatto[] = [];
  

  constructor(private router: Router) {
    this.caricaContattiSalvati();
    this.contattiFiltrati = this.contatti
    
  }
  
  /* private confermaEliminazioneSource = new Subject<boolean>();
  confermaEliminazione$ = this.confermaEliminazioneSource.asObservable();

  confermaEliminazione(confermato: boolean, id: number): void {
    if (confermato) {
      this.eliminaContatto(id);
    }
    this.confermaEliminazioneSource.next(confermato);
  } */

  aggiungiContatto(contatto: Contatto): void {
    contatto.id = this.generaNuovoId();
    this.contatti.push(contatto);
    this.salvaContatti();
  }

  eliminaContatto(id: number): void {
    const index = this.contatti.findIndex(contatto => contatto.id === id);
    if (index !== -1) {
      this.contatti.splice(index, 1);
      this.salvaContatti();
    }
  }

  ottieniContatti(): Contatto[] {
    return this.ordinatoPerNome ? this.contatti.sort((a, b) => (a.nome || '').localeCompare(b.nome || '')) : this.contatti;
  }

  ordinaContattiPerNome(): void {
    this.contatti.sort((a, b) => (a.nome || '').localeCompare(b.nome || ''));
    this.ordinatoPerNome = true;
  }

  ricercaContatti(query: string) {
    query = query.toLowerCase();
    this.router.navigate(
      ['/contatti'],
      { queryParams: { query: query } });
      console.log('Eseguendo la ricerca con query:', query);
    return this.contatti.filter(contatto =>
      contatto.nome.toLowerCase().includes(query) ||
      contatto.cognome.toLowerCase().includes(query) ||
      contatto.email.toLowerCase().includes(query)
    );
  }

  private generaNuovoId(): number {
    return this.contatti.length > 0 ? Math.max(...this.contatti.map(contatto => contatto.id)) + 1 : 1;
  }

  private salvaContatti(): void {
    localStorage.setItem('contatti', JSON.stringify(this.contatti));
  }

  private caricaContattiSalvati(): void {
    const contattiSalvati = localStorage.getItem('contatti');
    if (contattiSalvati) {
      this.contatti = JSON.parse(contattiSalvati);
    }
  }

  effettuaRicerca(query: string) {
    query = query.toLowerCase();
    this.router.navigate(
      ['/contatti'],
      { queryParams: { query: query } }
    );
    console.log('Eseguendo la ricerca con query:', query);
    return localStorage.setItem('contattiFiltrati', JSON.stringify(this.contattiFiltrati = this.contatti.filter(contatto =>
      contatto.nome.toLowerCase().includes(query) ||
      contatto.cognome.toLowerCase().includes(query) ||
      contatto.email.toLowerCase().includes(query)
      )));
  }
}
