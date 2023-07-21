import { Injectable } from '@angular/core';
import { Contatto } from '../models/contatto.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {
  private contatti: Contatto[] = [];
  contattiSubject: BehaviorSubject<Contatto[]> = new BehaviorSubject<Contatto[]>([]);
  private ordinatoPerNome: boolean = false;
  contattiFiltrati: Contatto[] = [];

  private confermaEliminazioneSource = new Subject<boolean>();
  confermaEliminazione$ = this.confermaEliminazioneSource.asObservable();

  confermaEliminazione(confermato: boolean) {
    this.confermaEliminazioneSource.next(confermato);
    const index = this.contatti.findIndex(contatto => contatto.id);
    if (index !== -1) {
      this.contatti.splice(index, 1);
      this.salvaContatti();
    }
  }

  constructor(private router: Router) {
    this.caricaContattiSalvati();
    this.contattiSubject.next(this.contatti);
  }

  aggiungiContatto(contatto: Contatto): void {
    if (contatto.id) {
      const index = this.contatti.findIndex(c => c.id === contatto.id);
      if (index !== -1) {
        this.contatti[index] = contatto;
      }
    } else {
      contatto.id = this.generaNuovoId();
      this.contatti.push(contatto);
    }

    this.salvaContatti();
  }

  eliminaContatto(id: number): void {
    const index = this.contatti.findIndex(contatto => contatto.id === id);
    if (index !== -1) {
      this.contatti.splice(index, 1);
      this.salvaContatti();
      this.contattiSubject.next(this.contatti);
    }
  }

  ottieniContatti(): Contatto[] {
    return this.contatti;
  }

  getContattiObservable(): Observable<Contatto[]> {
    return this.contattiSubject.asObservable();
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
  
    this.contattiFiltrati = this.contatti.filter(contatto =>
      contatto.nome.toLowerCase().includes(query) ||
      contatto.cognome.toLowerCase().includes(query) ||
      contatto.email.toLowerCase().includes(query)
    );
    this.contattiSubject.next(this.contattiFiltrati);
    return this.contattiFiltrati;
    
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
}
