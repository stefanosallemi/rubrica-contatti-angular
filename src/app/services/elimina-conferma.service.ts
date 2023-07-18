import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EliminaConfermaService {
  private confermaEliminazioneSource = new Subject<boolean>();
  confermaEliminazione$ = this.confermaEliminazioneSource.asObservable();

  confermaEliminazione(confermato: boolean) {
    this.confermaEliminazioneSource.next(confermato);
  }
}
